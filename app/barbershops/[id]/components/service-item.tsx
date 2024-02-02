"use client";

import Image from "next/image";
import { Service } from "@prisma/client";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceItemProps {
    service: Service
    isAuthenticated?: boolean
}

const ServiceItem = ({ service, isAuthenticated }: ServiceItemProps) => {
    const handleBookingClick = () => {
        if (!isAuthenticated) {
            signIn("google");
        }
    }

    return (  
        <Card>
            <CardContent className="p-3 w-full">
               <div className="flex gap-4 items-center w-full">
                    <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
                        <Image 
                            src={service.imageUrl}
                            alt={service.name}
                            fill
                            style={{objectFit: 'contain'}}
                            className="rounded-lg"
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <h2 className="font-bold ">{service.name}</h2>
                        <p className="text-sm text-gray-400">{service.description}</p>

                        <div className="flex items-center justify-between mt-3">
                            <p className="text-primary text-sm font-bold">
                                {Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                     currency: "BRL",
                                }).format(Number(service.price))}
                            </p>
                            <Button variant="secondary" onClick={handleBookingClick}>Reservar</Button>
                        </div>
                    </div>
               </div>
            </CardContent>
        </Card>
    );
}
 


export default ServiceItem;