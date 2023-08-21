import Area from "@/app/components/Area";
import Menu from "@/app/components/Menu";
import Image from "next/image";
import Card from "@/app/components/Card";
import Workshops from "@/app/components/Workshops";
import Link from "next/link";


export default function Schedule () {
    return (
        <Area className="flex bg-background-secondary gap-8 text-2xl text-justify font-body ">

            <div className="mb-20">
                <div className="flex text-white items-center justify-center font-background opacity-20 text-7xl leading-relaxed ">
                    <h1>Imperdível...</h1>
                </div>
                <p className="">Confira as palestras exclusivas da Polkadot Brasil que vão rolar no Blockchain Rio Festival 2023:</p>

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