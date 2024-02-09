import Image from "next/image";
import Header from "../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Home() {
  return (
    <div>
      <Header></Header>

      <h2>Ola, Miguel!</h2>
      <p>{format(new Date(), "EEEE", {
        locale: ptBR,
        })}
      </p>

    </div>
    
  );
}
