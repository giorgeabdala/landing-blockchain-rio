import Area from "@/app/components/Area";
import ButtonDefault from "@/app/components/Button";
import TwitterModal from "@/app/components/TwitterModal";
import TwitterButton from "@/app/components/TwitterButton";
import Modals from "@/app/components/Modals";



export default function Ticket() {
    return (
        <Area className="bg-background-primary">
            <div id="ticket" className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="flex justify-center">
                    <div className="flex flex-col items-center justify-center font-body text-justify text-2xl gap-8 mt-10 mb-20">
                        <p>
                            Garanta Seu Passaporte Gratuito para o Blockchain Rio Festival 2023 e tenha a chance de
                            estar no coração das discussões sobre blockchain, tecnologia e inovação.
                            Para obter seu ingresso gratuito:
                            1 - Compartilhe este entusiasmo! Compartilhe nosso post de divulgação no twitter.
                            2 - Complete o formulário de registro no link fornecido abaixo, garantindo que todas as informações estejam corretas.
                            Após concluir essas etapas emocionantes, você receberá seu ingresso diretamente em seu e-mail.
                            Não deixe essa oportunidade escapar - junte-se a nós para um dia repleto de conhecimento, networking e visões inovadoras.
                        </p>

                        <Modals />


                    </div>
                </div>
            </div>
        </Area>

    )



}