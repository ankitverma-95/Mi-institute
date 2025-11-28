import Link from "next/link";
import { Phone } from "lucide-react";

// Actually, I didn't plan for a full UI library like shadcn/ui, so I will implement a simple button or style it directly.
// Let's stick to direct styling for simplicity unless I want to add a Button component.
// I'll add a simple Button component to make things cleaner, or just use standard HTML buttons with classes.
// Let's use standard HTML for now to avoid creating too many files not in the plan, but I'll make it look good.

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tighter text-blue-600 dark:text-blue-400">
                        MI Institute
                    </span>
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Home
                    </Link>
                    <Link href="#courses" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Courses
                    </Link>
                    <Link href="#centers" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Centers
                    </Link>
                    <Link href="#testimonials" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Testimonials
                    </Link>
                    <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Contact
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <a
                        href="#callback"
                        className="hidden sm:flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                    >
                        <Phone className="h-4 w-4" />
                        Request Callback
                    </a>
                </div>
            </div>
        </header>
    );
}
