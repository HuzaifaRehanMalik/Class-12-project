import Link from "next/link"

import { Heart, ShoppingCart } from 'lucide-react';
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


export default function DesktopNavebar() {
  return (
    <div>
      <ul className='flex justify-evenly items-center'>
        <h3 className="text-3xl ">
          <Link href="/" >
            Exclusive
          </Link>
        </h3>
        <li>
          <Link href="/" >
            Home
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/About" >
            About
          </Link>
        </li>
        <li>
          <Link href="/SignUP" >
            Sign up
          </Link>
        </li>


        <li className="inline-flex ">
          <Command>
            <CommandInput placeholder="What are you iooking for?" />
          </Command>

        </li>
        <li className="flex gap-5">
          <Heart />
          <ShoppingCart />
        </li>


      </ul>

    </div>
  )
}
