import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
    return (
        <div className="p-4 md:p-8  flex">
            <div >

                <ScrollArea className="h-52 w-40 md:h-96 md:w-52  border p-8">
                    <ul className="text-xs md:text-xl">
                        <li><Link href="/">
                            Health & Beauty
                        </Link></li>
                        <li><Link href="/">
                            Men`s Fashion
                        </Link></li>
                        <li>
                            <Link href="/">
                                Electronics
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                Home & Lifestyle
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                Medicine
                            </Link>
                        </li>
                        <li>
                            <Link href=''>
                                Sports & Outdoor
                            </Link>
                        </li>
                        <li>
                            <Link href=''>
                                Babys & Toys
                            </Link>
                        </li>
                        <li>
                            <Link href=''>
                                Groceries & Pets
                            </Link>
                        </li>
                        <li>
                            <Link href=''>
                                Woman`s Fashion
                            </Link>
                        </li>

                    </ul>
                </ScrollArea>
            </div>
            <div className="bg-black h-{20px} w-{10px} md:w-{900px} md:h-{500px}">
                <Image src="/AppleLogo.png" alt="Iphone14" width={200} height={100} className="p-2 m-2 md:p-4 md:m-8" />
                <div className="text-white  md:text-5xl p-4">
                    Up to 10% off Voucher
                </div>
                <div className="text-white  text-xs md:text-2xl p-3 md:py-4 px-8 ">
                    <button className="underline">
                        Shop Now 
                    
                    </button>
                </div>
            </div>
            <div className="w-{30px} h-{10px} bg-black ">
                <Image src="/iphone14.png" alt="Iphone14" width={700} height={300} className="py-4" />
            </div>

        </div>
    )
}
