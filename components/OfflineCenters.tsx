import { MapPin } from "lucide-react";

const centers = [
    {
        city: "New Delhi",
        address: "123, Knowledge Park, South Extension, New Delhi - 110049",
        phone: "+91 98765 43210",
    },
    {
        city: "Mumbai",
        address: "45, Education Hub, Andheri West, Mumbai - 400053",
        phone: "+91 98765 43211",
    },
    {
        city: "Kota",
        address: "78, Success Lane, Talwandi, Kota - 324005",
        phone: "+91 98765 43212",
    },
];

export default function OfflineCenters() {
    return (
        <section id="centers" className="py-20 bg-white dark:bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50">
                        Our Offline Centers
                    </h2>
                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                        Visit our state-of-the-art campuses near you.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {centers.map((center) => (
                        <div
                            key={center.city}
                            className="flex flex-col rounded-2xl border border-zinc-200 p-6 transition-all hover:border-blue-500 dark:border-zinc-800 dark:hover:border-blue-500"
                        >
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                                {center.city}
                            </h3>
                            <p className="mb-4 flex-1 text-zinc-600 dark:text-zinc-400">
                                {center.address}
                            </p>
                            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                                Phone: <span className="text-blue-600 dark:text-blue-400">{center.phone}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
