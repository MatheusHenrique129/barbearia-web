import Image from "next/image";
import { MenuIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Header = () => {
    return (
        <Card>
            <CardContent className="px-5 py-6 justify-between items-center flex flex-row">
                <Image src="/logo.png" alt="Logo Barber" height={22} width={120} />
                <Button variant="outline" size="icon">
                    <MenuIcon size={24} />
                </Button>
            </CardContent>
        </Card>
      );
};
 
export default Header;