import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-zinc-300">
            <div className="container mx-auto px-4 py-12 md:px-6">
                <div className="grid gap-8 lg:grid-cols-4">
                    <div>
                        <Link href="/" className="mb-4 inline-block text-2xl font-bold text-white">
                            MI Institute
                        </Link>
                        <p className="text-sm leading-relaxed">
                            Empowering students to achieve their academic and career goals through world-class education and mentorship.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <Link href="#" className="hover:text-white"><Facebook className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-white"><Instagram className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-white"><Linkedin className="h-5 w-5" /></Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-white">About Us</Link></li>
                            <li><Link href="#courses" className="hover:text-white">Courses</Link></li>
                            <li><Link href="#centers" className="hover:text-white">Centers</Link></li>
                            <li><Link href="#testimonials" className="hover:text-white">Success Stories</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">Courses</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-white">NEET</Link></li>
                            <li><Link href="#" className="hover:text-white">IIT JEE</Link></li>
                            <li><Link href="#" className="hover:text-white">UPSC</Link></li>
                            <li><Link href="#" className="hover:text-white">School Boards</Link></li>
                            <li><Link href="#" className="hover:text-white">Govt Jobs</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">Contact Info</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 shrink-0 text-blue-500" />
                                <span>123, Education Hub, Knowledge Park, New Delhi - 110001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 shrink-0 text-blue-500" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 shrink-0 text-blue-500" />
                                <span>info@miinstitute.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} MI Institute. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
