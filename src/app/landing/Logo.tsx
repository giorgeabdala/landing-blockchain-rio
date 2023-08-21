import Area from "@/app/components/Area";
import logo from "/logo.png";
import Image from 'next/image'



export default function Logo() {
    return (
        <Area className="bg-transparent">
            <div className="flex flex-col items-center justify-center ">
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Image src="/logo_transparent.png" alt="logotipo da comunidade Polkadot Brasil" width={500} height={500} />
                <h1 className="text-3xl font-bold text-white font-title">POLKADOT BRASIL</h1>
            </div>

        </Area>
    )
}