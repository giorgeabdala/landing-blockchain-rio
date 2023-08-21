import {NextResponse} from "next/server";
import WhatsAppNotificationServiceCodeChat from "@/app/api/infra/WhatsService";
const message = "Parabens ganhou ingresso (alterar msg depois)!";
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