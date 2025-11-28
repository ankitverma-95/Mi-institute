import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallbackForm from "@/components/CallbackForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white dark:bg-black">
            <Header />
            <main className="flex-1">
                <div className="bg-zinc-50 py-20 dark:bg-zinc-900">
                    <div className="container mx-auto px-4 md:px-6">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                            Contact Us
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                            We're here to help you with any questions you may have about our courses, admissions, or centers.
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-20 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                                Get in Touch
                            </h2>
                            <div className="mt-8 space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Head Office</h3>
                                        <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                                            123, Education Hub, Knowledge Park,<br />
                                            South Extension, New Delhi - 110049
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Phone</h3>
                                        <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                                            +91 98765 43210<br />
                                            +91 98765 43211
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Email</h3>
                                        <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                                            admissions@miinstitute.com<br />
                                            support@miinstitute.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                                    Find Us on Map
                                </h2>
                                <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.0688975472578!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1716888000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                        <div>
                            <CallbackForm />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
