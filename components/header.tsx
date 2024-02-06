"use client";

import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "lucide-react";

import SideMenu from "@/components/side-menu";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
    return (
        <Card>
            <CardContent className="p-5 justify-between items-center flex flex-row">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo Barber" height={22} width={120} />
                </Link>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <MenuIcon size={24} />
                        </Button>   
                    </SheetTrigger>  

                    <SheetContent className="p-0">
                        <SideMenu />
                    </SheetContent>  
                </Sheet>            
            </CardContent>
        </Card>
    );
};
 
export default Header;