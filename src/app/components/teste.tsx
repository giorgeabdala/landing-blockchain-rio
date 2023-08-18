import User from "@/app/api/dto/User";
import Event from "@/app/api/dto/Event";
import ButtonDefault from "@/app/components/Button";
async function  processForm() {
    const event: Event = {name: "blockchain  Rio", date: new Date()}
    const user:User = {name: "teste", email: "dot@dot.com.br", birthday: new Date(), occupation:"teste", whatsapp:"41995691212", event: event};

    const response = await fetch(process.env.NEXT_PUBLIC_URL + '/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)});

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

export default async function Teste() {
    const data = await processForm();
    return (
        <div>
            {data.message}
        </div>
    )
}