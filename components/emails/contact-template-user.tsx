import * as React from 'react';

interface EmailTemplateProps {
    full_name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
}

export function ContacttEmailTemplateUser({
    full_name,
    email,
    phone,
    company,
    message
}: EmailTemplateProps) {
    return (
        <div style={{ fontFamily: 'Helvetica, Arial, sans-serif', backgroundColor: '#f4f4f5', padding: '20px' }}>
            <div style={{
                maxWidth: '600px',
                margin: '0 auto',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}>
                <div style={{
                    backgroundColor: '#0073d5',
                    color: '#ffffff',
                    padding: '20px',
                    textAlign: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold',
                }}>
                    Thanks for contacting us!
                </div>

                <div style={{ padding: '30px 20px', lineHeight: 1.6 }}>
                    <p>Hi {full_name},</p>

                    <p>We have received your message and will get back to you as soon as possible.</p>

                    <div style={{
                        backgroundColor: '#f4f4f5',
                        padding: '15px',
                        borderRadius: '6px',
                        marginTop: '20px',
                    }}>
                        <p><strong>Name:</strong> {full_name}</p>
                        <p><strong>Phone:</strong> {phone}</p>
                        <p><strong>Company:</strong> {company}</p>
                        <p><strong>Message:</strong> {message}</p>
                    </div>

                    <p>We truly appreciate your business and look forward to working with you.</p>

                    <p>Sincerely,<br />Alfredo Dominguez</p>
                </div>

                <div style={{
                    padding: '20px',
                    textAlign: 'center',
                    fontSize: '12px',
                    color: '#999',
                }}>
                    Three Stars Transport Inc. | (619) 939-6319 | contact@tstransportinc.com
                </div>
            </div>
        </div>
    );
}
