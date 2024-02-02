"use client";

import Link from "next/link";
import Image from "next/image";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";

import SideMenu from "@/components/side-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


interface BarbershopInfoProps {
    barbershop: Barbershop
}

const BarbershopInfo = ({barbershop}: BarbershopInfoProps) => {

    return ( 
        <div>
            <div className="h-[250px] w-full relative">
                <Button size="icon" variant="outline" className="z-50 absolute top-4 left-4" asChild >
                    <Link href="/">
                        <ChevronLeftIcon />
                    </Link>
                </Button>

                <Sheet>
                    <SheetTrigger asChild>
                         <Button size="icon" variant="outline" className="z-50 absolute top-4 right-4">
                            <MenuIcon />
                        </Button> 
                    </SheetTrigger>  

                    <SheetContent className="p-0">
                        <SideMenu />
                    </SheetContent>  
                </Sheet> 

                <Image
                    src={barbershop.imageUrl}
                    alt={barbershop.name}
                    fill
                    style={{objectFit: "cover"}}
                    className="opacity-75"
                />
            </div>

            <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary">
                <h1 className="text-xl font-bold">{barbershop.name}</h1>
                <div className="flex items-center gap-1 mt-2">
                    <MapPinIcon className="text-primary" size={18} />
                    <p className="text-sm">{barbershop.address}</p>
                </div>
                <div className="flex items-center gap-1 mt-2">
                    <StarIcon className="fill-primary text-primary" size={18} />
                    <p className="text-sm">5.0 (1.000 avaliações)</p>
                </div>
            </div>
        </div>
     );
}
 
export default BarbershopInfo;