import Area from "@/app/components/Area";
import ButtonDefault from "@/app/components/Button";
import TwitterModal from "@/app/components/TwitterModal";
import TwitterButton from "@/app/components/TwitterButton";
import Modals from "@/app/components/Modals";
import Image from "next/image";



export default function Ticket() {
    return (
        <Area className="bg-background-primary">
            <div id="ticket" className="flex flex-col md:flex-row-reverse  lg:gap-36 items-center  justify-items-center  mt-20 mb-20 ">
                <Image src={"/festival-rio.webp"} alt={"logo da Blockchain Festival"} width={300} height={300} />
                <div className="flex justify-center mt-20 md:mt-0 md:gap-4 ">
                    <div className="flex flex-col  justify-center font-body text-justify text-2xl ">

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