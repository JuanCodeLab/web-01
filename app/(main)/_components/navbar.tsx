"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Logo } from "./logo";
import { MenuButton } from "@/components/ui/menu-button";

export const Navbar = () => {

    const scrolled = useScrollTop();
    return (
        // <div className={cn(
        //     "z-50 bg-transparent fixed top-0 flex items-center w-full p-6",
        //     scrolled && "border-b shadow-sm"
        // )}>
        <div className="z-50 bg-transparent fixed top-0 flex items-center w-full p-6">
            <Logo/>
            <div className="block md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2 md:gap-x-2.5">
                <Button className="md:block" variant="ghost" size="sm">
                    <Link href="/documents">
                        Promociones
                    </Link>
                </Button>
                <ModeToggle/>
                <MenuButton/>
            </div>
        </div>
    );
}