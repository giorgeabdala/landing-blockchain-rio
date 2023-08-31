import Area from "@/app/components/Area";
import Menu from "@/app/components/Menu";
import Image from "next/image";


export default function Networking() {
    return (

        <Area className="bg-background-primary">
            <div className="flex flex-col items-center justify-center font-body text-justify text-2xl gap-8 mt-10 mb-20">

                <div className="flex font-background text-white opacity-20 text-7xl lg:text-9xl md:text-8xl">
                    <p>Networking...</p>
                </div>


                <div className="flex">
                    <p> A Blockchain Rio Festival 2023 será um encontro incrível de mentes brilhantes do universo cripto
                        brasileiro. Imagine-se conectando com palestrantes renomados, como João Hazim e Rafael Castaneda,
                        além de outros grandes nomes do setor.</p>
                </div>

                <div className="grid grid-cols-3 gap-4 w-auto h-auto">
                    <img className="rounded" src={"/photos/foto1.jpeg"} alt={"foto"} />
                    <img className="rounded" src={"/photos/foto2.jpeg"} alt={"foto"} />
                    <img className="rounded" src={"/photos/foto3.jpeg"} alt={"foto"} />

                    <img className="rounded" src={"/photos/foto5.jpeg"} alt={"foto"} />
                    <img className="rounded" src={"/photos/foto6.jpeg"} alt={"foto"} />
                    <img className="rounded" src={"/photos/foto7.jpeg"} alt={"foto"} />
                    <img className="rounded" src={"/photos/foto8.jpeg"} alt={"foto"} />
                    <img className="rounded" src={"/photos/foto9.jpeg"} alt={"foto"} />
                    <img className="rounded" src={"/photos/foto10.jpeg"} alt={"foto"} />
                </div>
           </div>

        </Area>
    )
}