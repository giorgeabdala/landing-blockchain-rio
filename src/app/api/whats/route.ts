import {NextResponse} from "next/server";
import WhatsAppNotificationServiceCodeChat from "@/app/api/infra/WhatsService";
const message = "Parabéns! Você acaba de ganhar 100% de desconto para um ingresso individual para o evento, faça sua inscrição no link abaixo:\n" +
    "\n" +
    "https://www.sympla.com.br/blockchain-rio__2065562?d=Polkadot_te_leva\n" +
    "\n" +
    "O Blockchain Festival é a porta de entrada para o epicentro da inovação digital, de 12 a 14 de setembro, no Rio de Janeiro você está convidado a se unir à vanguarda tecnológica, onde as mentes mais brilhantes se reúnem para dar forma ao futuro.\n" +
    "\n" +
    "Esperamos você lá!";
export async function POST(req: Request, res: Response) {
        try {
                console.log("/whats/route");
                const body = await req.json();
                console.log("body: ", body);
                const whatsService = new WhatsAppNotificationServiceCodeChat();
                const result = await whatsService.send(body, message);
                if (result.status === 200) return NextResponse.json({message:"OK"});
                return NextResponse.error();
        } catch (e) {
                console.log("Erro: ", e);
                return NextResponse.error();
        }
}