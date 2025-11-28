import { GraduationCap, BookOpen, Scale, Building2, Briefcase, School } from "lucide-react";

const categories = [
    {
        title: "NEET",
        description: "Comprehensive medical entrance preparation.",
        icon: GraduationCap,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "IIT JEE",
        description: "Top-tier engineering entrance coaching.",
        icon: BookOpen,
        color: "bg-green-100 text-green-600",
    },
    {
        title: "Pre-Foundation",
        description: "Building strong bases for future success.",
        icon: School,
        color: "bg-yellow-100 text-yellow-600",
    },
    {
        title: "School Boards",
        description: "CBSE, ICSE, UP Boards excellence.",
        icon: BookOpen,
        color: "bg-purple-100 text-purple-600",
    },
    {
        title: "UPSC",
        description: "Civil services examination guidance.",
        icon: Scale,
        color: "bg-red-100 text-red-600",
    },
    {
        title: "Govt Job Exams",
        description: "SSC, Banking, Teaching, Judiciary.",
        icon: Briefcase,
        color: "bg-indigo-100 text-indigo-600",
    },
];

export default function ExamCategories() {
    return (
        <section id="courses" className="py-20 bg-zinc-50 dark:bg-zinc-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-50">
                        Our Exam Categories
                    </h2>
                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                        Choose your path to success with our specialized courses.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category) => (
                        <div
                            key={category.title}
                            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-zinc-800"
                        >
                            <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${category.color}`}>
                                <category.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                                {category.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                {category.description}
                            </p>
                            <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 group-hover:underline dark:text-blue-400">
                                Learn more &rarr;
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
