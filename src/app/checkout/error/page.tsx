import Area from "@/app/components/Area";
import Image from 'next/image'



export default function checkout() {
    return (
        <Area className="bg-transparent h-screen">
            <div className="flex flex-col items-center justify-center  ">
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Image src="/logo_transparent.png" alt="logotipo da comunidade Polkadot Brasil" width={500} height={500} />
                <h1 className="text-4xl font-bold  font-title text-polkadot-rose ">POLKADOT BRASIL</h1>
            </div>
            <div className="flex flex-col font-body items-center font-black text-justify mt-20 gap-8 text-lg text-white">
                <p>PARABÉNS!!!</p>

                <div>
                    Houve algum erro no processamento da sua solicitação. Por favor, procure os administradores da Polkadot Brasil pelo telegram ou no Discord
                    </div>

            </div>

        </Area>
    )
}
