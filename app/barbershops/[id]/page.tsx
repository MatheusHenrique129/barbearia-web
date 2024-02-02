

import { db } from "@/lib/prisma";

import BarbershopInfo from "./components/barbershop-info";
import ServiceItem from "./components/service-item";

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
        include: {
            services: true,
        }
    });

    if (!barbershop) {
        // TODO: ir para home page
        return (<h1>Barbearia não encontrada no Banco de Dados *_*</h1>);
    } 

    return ( 
         <div>
            <BarbershopInfo barbershop={barbershop} />
     
            <div className="px-5 flex flex-col gap-4 py-6">
                {barbershop.services.map(service => (
                    <ServiceItem key={service.id} service={service}/>
                ))}
            </div>
          

        </div>
     );
};
 
export default BarbershopDetailsPage;