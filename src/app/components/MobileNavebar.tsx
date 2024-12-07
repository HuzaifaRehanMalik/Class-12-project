import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

import { Heart } from 'lucide-react';
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


export default function MobileNavebar() {
    return (
        <nav className="flex justify-evenly items-start">
            <div>
                <h3 className="text-3xl">
                    <Link href="/">
                        Exclusive
                    </Link>
                </h3>
            </div>

            <div>

                <Sheet>

                    <SheetTrigger>
                        <Menu />
                    </SheetTrigger>
                    <SheetContent >
                        <SheetHeader>
                            <SheetTitle>MENU</SheetTitle>
                            <SheetDescription>
                                <ul>

                                    <li>
                                        <Link href="/">

                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Contact">
                                            Contact

                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/About">
                                            About

                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Sign up">

                                            Sign up
                                        </Link>
                                    </li>
                                </ul>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

            </div >



        </nav >
    )
}
