"use client";

import { useState } from "react";

export default function CallbackForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        mode: "online",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you! We will call you back shortly.");
        setFormData({ name: "", phone: "", mode: "online" });
    };

    return (
        <section id="callback" className="py-20 bg-blue-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Request a Call Back
                        </h2>
                        <p className="mt-4 text-lg text-blue-100">
                            Have questions about our courses or admission process? Fill out the form and our expert counselors will get in touch with you.
                        </p>
                        <ul className="mt-8 space-y-4 text-blue-100">
                            <li className="flex items-center gap-3">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-sm font-bold">1</span>
                                Expert Career Counseling
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-sm font-bold">2</span>
                                Course Details & Fee Structure
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-sm font-bold">3</span>
                                Scholarship Information
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-2xl bg-white p-8 text-zinc-900 shadow-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-zinc-700">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="mode" className="block text-sm font-medium text-zinc-700">
                                    Preferred Course Mode
                                </label>
                                <select
                                    id="mode"
                                    className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    value={formData.mode}
                                    onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                                >
                                    <option value="online">Online</option>
                                    <option value="offline">Offline</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
