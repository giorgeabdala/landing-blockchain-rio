import Area from "@/app/components/Area";
import Menu from "@/app/components/Menu";
import Image from "next/image";
import Card from "@/app/components/Card";
import Workshops from "@/app/components/Workshops";
import Link from "next/link";


export default function Schedule () {
    return (
        <Area className="flex bg-background-secondary">

            <div className="flex flex-col items-center justify-center font-body text-justify text-2xl gap-8 mt-10 mb-20">
                <div className="flex text-white items-center justify-center font-background opacity-10 font-black text-5xl md:text-8xl lg:text-9xl">
                    <h1>Imperdível...</h1>
                </div>
                <p className="mt-4">Confira as palestras exclusivas da Polkadot Brasil que vão rolar no Blockchain Rio Festival 2023:</p>

                <Workshops />

                <div className="flex flex-col mt-8 font-body gap-4">
                    <p>
                        Prepare-se para um mergulho profundo nessas palestras que definirão o futuro da blockchain.
                    </p>
                    <p>
                        Não perca essa oportunidade no Blockchain Rio Festival 2023! </p>

                    <p>Confira
                        <Link href="https://blockchainfestival.io/"> aqui </Link>
                        outras palestras que vão rolar no Blockchain Rio Festival 2023.</p>

                </div>
            </div>





      </Area>
    )

}