"use client";

import { Barbershop } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface BarberShopItemProps {
    barbershop: Barbershop;
}

const BarberShopItem = ({ barbershop }: BarberShopItemProps) => {

    return (  
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className="px-1 py-0">
                <div className="w-full h-[159px] relative">
                    <div className="absolute top-2 left-2 z-50">
                        <Badge variant="secondary" className="opacity-90 flex gap-1 items-center ">
                            <StarIcon size={12} className="fill-primary text-primary" />
                            <span className="text-xs">5.0</span>
                        </Badge>
                    </div>

                    <Image 
                        src={barbershop.imageUrl}
                        alt={barbershop.name}
                        height={0}
                        width={0}
                        sizes="100vw"
                        fill
                        className="rounded-2xl"
                        style={{objectFit: "cover"}}
                    />
                </div>

                <div className="px-2 pb-3">
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                    <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
                    <Button className="w-full mt-3" variant="secondary">
                        <Link href={`/barbershops/${barbershop.id}`}>
                            Reservar
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
 

export default BarberShopItem;