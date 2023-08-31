import Area from "@/app/components/Area";
import Modals from "@/app/components/Modals";
import Image from "next/image";
import blockrio from "/public/photos/BlockRio1.png";



export default function Ticket() {
    return (
        <Area className="bg-background-primary">
            <div id="ticket" className="grid grid-cols-1 md:grid-cols-3 mt-20 mb-20 justify-items-center md:justify-items-start">
                <Image className="w-auto h-auto max-w-xs md: items-start" src={blockrio} alt={"logo da Blockchain Festival"} />
                <div className="flex justify-center mt-20 md:mt-0 md:col-span-2">
                    <div className="flex flex-col  justify-center font-body text-justify leading-loose text-2xl text-zinc-100 gap-4">

                        <p>
                            Garanta Seu Passaporte para a Blockchain Rio Festival 2023 e tenha a chance de
                            estar no coração das discussões sobre blockchain, tecnologia e inovação.
                        </p>
                        <p>Para obter seu passaporte, clique no botão abaixo e siga as instruções na próxima tela. </p>
                        <div className="flex justify-center mt-8">
                            <Modals />
                        </div>
                    </div>
                </div>
            </div>
        </Area>

    )



}