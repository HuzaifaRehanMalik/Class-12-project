import Image from "next/image"
import { Heart } from 'lucide-react';
import { Eye } from 'lucide-react';
export default function ProductCard() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-8" >
            <div className="w-[270px] h-[350px] ">
                <div className="w-[270px] h-[250px] bg-slate-300 py-10 px-10">

                    <div className="flex flex-col justify-end items-end gap-1">
                        <Heart className="bg-white rounded-lg p-1" />
                        <Eye className="bg-white rounded-lg p-1" />
                    </div>
                    <div>
                        <Image src="/p-1.png" alt="Product-1" width={400} height={0} />
                    </div>

                </div>
                <div className="font-semibold">
                    AK-900 Wired Keyboard
                </div>
                <div className="text-red-500 ">
                    $ 960
                </div>
                <div>
                    <Image src="/star1.png" alt="Product-1" width={100} height={50} />
                </div>

            </div>
            <div className="w-[270px] h-[350px] ">
                <div className="w-[270px] h-[250px] bg-slate-300 py-10 px-10">

                    <div className="flex flex-col justify-end items-end gap-1">
                        <Heart className="bg-white rounded-lg p-1" />
                        <Eye className="bg-white rounded-lg p-1" />
                    </div>
                    <div>
                        <Image src="/p-2.png" alt="Product-1" width={130} height={100} className="px-5" />
                    </div>

                </div>
                <div className="font-semibold">
                    S-Series Comfort Chair
                </div>
                <div className="text-red-500 ">
                    $ 375
                </div>
                <div>
                    <Image src="/star2.png" alt="Product-1" width={100} height={50} />
                </div>

            </div>



            <div className="w-[270px] h-[350px] ">
                <div className="w-[270px] h-[250px] bg-slate-300 py-10 px-10">

                    <div className="flex flex-col justify-end items-end gap-1">
                        <Heart className="bg-white rounded-lg p-1" />
                        <Eye className="bg-white rounded-lg p-1" />
                    </div>
                    <div>
                        <Image src="/p-3.png" alt="Product-1" width={150} height={100} />
                    </div>

                </div>
                <div className="font-semibold">
                    IPS LCD Gaming Monitor
                </div>
                <div className="text-red-500 ">
                    $ 370
                </div>
                <div>
                    <Image src="/star1.png" alt="Product-1" width={100} height={50} />
                </div> 

            </div>

            <div className="w-[270px] h-[350px] ">
                <div className="w-[270px] h-[250px] bg-slate-300 py-10 px-10">

                    <div className="flex flex-col justify-end items-end gap-1">
                        <Heart className="bg-white rounded-lg p-1" />
                        <Eye className="bg-white rounded-lg p-1" />
                    </div>
                    <div>
                        <Image src="/p-4.png" alt="Product-1" width={150} height={100} />
                    </div>

                </div>
                <div className="font-semibold">
                    HAVIT HV-G92 Gamepad
                </div>
                <div className="text-red-500 ">
                    $ 120
                </div>
                <div>
                    <Image src="/star2.png" alt="Product-1" width={100} height={50} />
                </div> 

            </div>



        </div>
    )
}
