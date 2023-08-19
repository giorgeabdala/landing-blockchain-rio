import Card from "@/app/components/Card";


export default function Workshops() {
    return (
        <div id="workshop" className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="flex justify-center">
                <Card
                    image={"/workshop.png"}
                    alt={"Imagem do Workshop sobre Poladot e suas parachains. A próxima geração das redes descentralizadas"}
                    title={"Polkadot e suas Parachains:"}
                    description={"A próxima geração das redes descentralizadas"} />
            </div>

            <div className="flex justify-center">
                <Card
                    image={"/substrate.png"}
                    alt={"Imagem do workshop sobre o framework substrate da Polkadot"}
                    title={"Framework Polkadot Substrate:"}
                    description={"O poder das blockchains personalizadas"} />
            </div>
        </div>
    )


}