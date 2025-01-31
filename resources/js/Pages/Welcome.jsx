import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar.jsx";
import FeedbackLayout from "@/Components/FeedbackLayout.jsx";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Feedback tool" />
            <div>
                <Navbar auth={auth} />
                <div>
                    <main className="mt-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                            <FeedbackLayout />
                        </div>
                    </main>

                    <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                        Laravel v{laravelVersion} (PHP v{phpVersion})
                    </footer>
                </div>
            </div>
        </>
    );
}
