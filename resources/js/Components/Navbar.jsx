import { Link } from "@inertiajs/react";

export function Navbar({ auth }) {
    return (
        <>
            <nav className="border-b border-gray-100 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                    <Link
                                        href={route("login")}
                                        className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href={route("register")}
                                        className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out"
                                    >
                                        Register
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
