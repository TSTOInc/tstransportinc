import { Logo } from '@/components/logo'
import Link from 'next/link'

const links = [
    {
        group: 'Company',
        items: [
            {
                title: 'Home',
                href: '/',
            },
            {
                title: 'services',
                href: '/services',
            },
            {
                title: 'Quote',
                href: '/quote',
            }
        ],
    },
    {
        group: 'Legal',
        items: [
            {
                title: 'Terms & Conditions',
                href: '/terms-and-conditions',
            },
            {
                title: 'Privacy Policy',
                href: '/privacy-policy',
            }
        ],
    },
]

export default function Footer() {
    return (
        <footer className="border-b bg-white pt-20 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-12 md:grid-cols-5">
                    <div className="md:col-span-2">
                        <Link
                            href="/"
                            aria-label="go home"
                            className="block size-fit">
                            <Logo />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-3" dir="rtl">
                        {links.map((link, index) => (
                            <div
                                key={index}
                                className="space-y-4 text-sm">
                                <span className="block font-medium">{link.group}</span>
                                {link.items.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="text-muted-foreground hover:text-primary block duration-150">
                                        <span>{item.title}</span>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
                    <span className="text-muted-foreground order-last block text-center text-sm md:order-first">© {new Date().getFullYear()} Three Stars Transport Inc. All rights reserved.</span>
                    <span className="text-muted-foreground block text-sm">Designed by <a href="https://github.com/Angel-999" target="_blank" className="underline hover:text-primary duration-150">Angel Dominguez</a></span>
                </div>
            </div>
        </footer>
    )
}
