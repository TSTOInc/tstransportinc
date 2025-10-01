"use client"
import {
    useState
} from "react"
import {
    toast
} from "sonner"
import {
    useForm
} from "react-hook-form"
import {
    zodResolver
} from "@hookform/resolvers/zod"
import {
    z
} from "zod"
import {
    cn
} from "@/lib/utils"
import {
    Button
} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Input
} from "@/components/ui/input"
import {
    PhoneInput
} from "@/components/ui/phone-input";
import {
    Textarea
} from "@/components/ui/textarea"
import { contactFormSchema } from "@/lib/schemas"
import { send } from "@/lib/email"


export default function ContactForm() {

    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),

    })

    function onSubmit(values: z.infer<typeof contactFormSchema>) {
        try {
            send(values)
            toast.success("Form submitted successfully!")
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 max-w-3xl mx-auto py-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="full_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xl">Full Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="John Doe"

                                        type="text"
                                        {...field} />
                                </FormControl>
                                <FormDescription>Please enter your full name</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xl">Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="john@company.com"

                                        type="email"
                                        {...field} />
                                </FormControl>
                                <FormDescription>We will contact you using this email</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem className="flex flex-col items-start">
                            <FormLabel className="text-xl">Phone Number</FormLabel>
                            <FormControl className="w-full">
                                <PhoneInput
                                    placeholder="(555) 123-4567"
                                    {...field}
                                    defaultCountry="US"
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-xl">Company Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Your Company"

                                    type=""
                                    {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                </div>

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-xl">Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us the reason to contact us. Feel free to reach out "
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button variant={"secondary"} type="submit" className="w-full" size={"lg"}>Submit Message</Button>
            </form>
        </Form>
    )
}