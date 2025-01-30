import { Link } from "@inertiajs/react";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export function Navbar({ auth }) {
    return (
        <>
            <p>NAV!!!!</p>

            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuContent>
                            <Link href={route("login")}>
                                <NavigationMenuLink>Login</NavigationMenuLink>
                            </Link>
                            <Link href={route("register")}>
                                <NavigationMenuLink>
                                    Register
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
}

export default Navbar;
