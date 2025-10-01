"use server"

import { z } from "zod";
import { contactFormSchema } from "./schemas";
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { ContacttEmailTemplateUser } from "@/components/emails/contact-template-user";
import { ContacttEmailTemplateSelf } from "@/components/emails/contact-template-self";
import { tr } from "date-fns/locale";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof contactFormSchema>) => {
    try {
        const { data, error } = await resend.emails.send({
            from: 'contact@yeetco.shop',
            to: [emailFormData.email],
            subject: `We have received your message ${emailFormData.full_name}`,
            react: ContacttEmailTemplateUser({ full_name: emailFormData.full_name, email: emailFormData.email, phone: emailFormData.phone, company: emailFormData.company || "", message: emailFormData.message }),
        });
    } catch (error) {
        console.error("Form submission error", error);
    }
    try {
        const { data, error } = await resend.emails.send({
            from: 'contact@yeetco.shop',
            replyTo: emailFormData.email,
            to: 'contact@yeetco.shop',
            subject: `New message from ${emailFormData.full_name} - ${emailFormData.company || ""}`,
            react: ContacttEmailTemplateSelf({ full_name: emailFormData.full_name, email: emailFormData.email, phone: emailFormData.phone, company: emailFormData.company || "", message: emailFormData.message }),
        });
    } catch (error) {
        console.error("Form submission error", error);
    }
}