

import { db } from "@/lib/prisma";
import BarbershopInfo from "./components/barbershop-info";

interface BarbershopDetailsPageProps {
    params: {
        id?: string;
    };
}

const BarbershopDetailsPage = async ({params}: BarbershopDetailsPageProps) => {
    if (!params.id) {
        // TODO: ir para home page
        return (<h1>Meu ID {params.id} Barbearia não encontrada</h1>);
    } 

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
    });

    if (!barbershop) {
        // TODO: ir para home page
        return (<h1>Barbearia não encontrada no Banco de Dados *_*</h1>);
    } 

    return ( 
       <BarbershopInfo barbershop={barbershop} />
     );
};
 
export default BarbershopDetailsPage;