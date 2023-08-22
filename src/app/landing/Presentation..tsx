import Area from "@/app/components/Area";
import ButtonDefault from "@/app/components/Button";
import Link from "next/link";

interface PresentationProps {
    className?: string
}


export default function Presentation(props: PresentationProps) {
    return (
        <Area className="bg-transparent">
            <div id="start" className={`flex flex-col items-center justify-center 
            text-2xl text-white font-title  gap-8`}>
                <h2 className="text-zinc-400">Blockchain Rio 2023</h2>
                <h2>12 a 14 de setembro</h2>
                <div className="flex flex-col text-justify leading-snug gap-4 font-body">
                    <p>Preparado para mergulhar em um universo de tecnologia e inovação?</p>
                    <p>Garanta aqui seu Passaporte Gratuito para o Futuro: A Blockchain Rio Festival te Espera! 🚀</p>
                </div>


                <Link href="#ticket">
                <ButtonDefault className="mb-10" text={"Garanta seu passaporte"} />
                </Link>




                </div>


        </Area>
    )

}