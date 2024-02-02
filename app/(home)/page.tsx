import { format } from "date-fns";

import Header from "@/components/header";
import { ptBR } from "date-fns/locale";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Matheus!</h2>
          <p className="capitalize text-sm">
            {format(new Date(), "EEEE',' dd 'de' MMMM",  {
              locale: ptBR,
            })}
          </p>
      </div>
    </main>
  );
}
