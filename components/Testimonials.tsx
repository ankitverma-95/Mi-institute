import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Aditi Sharma",
        role: "NEET Rank 45",
        content: "The faculty at MI Institute is exceptional. Their guidance helped me crack NEET with a top rank.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    },
    {
        name: "Rahul Verma",
        role: "IIT JEE Rank 112",
        content: "The study material and test series were very close to the actual exam pattern. Highly recommended!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    },
    {
        name: "Priya Singh",
        role: "UPSC CSE Cleared",
        content: "MI Institute provided the right environment and mentorship for my UPSC journey.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-zinc-50 dark:bg-zinc-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50">
                        Student Success Stories
                    </h2>
                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                        Hear from our students who achieved their dreams.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="flex flex-col rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-800"
                        >
                            <div className="mb-6 flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="h-12 w-12 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                            <div className="mb-4 flex text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                            </div>
                            <p className="flex-1 italic text-zinc-600 dark:text-zinc-300">
                                "{testimonial.content}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
