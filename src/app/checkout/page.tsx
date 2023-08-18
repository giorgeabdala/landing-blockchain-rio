import User from "@/app/api/dto/User";


async function storeUser() {
    const event = {
        connect: {
            id: process.env.NEXT_PUBLIC_EVENT_ID
        }
    };

    const user:User = {name: "teste", email: "dot@dot.com.br", birthday: new Date().toISOString(),
        occupation:"teste", whatsapp:"41995691212", event: event};

    const response = await fetch(process.env.NEXT_PUBLIC_URL + '/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
        cache: 'no-cache'
    });

    if (!response.ok)  throw new Error(response.statusText);

    return response.json();

}

async function sendWhats() {
    const phone =  "5541995691111";
    const response = await fetch(process.env.NEXT_PUBLIC_URL + '/api/whats', {
        method: 'POST', headers:
            {'Content-Type': 'application/json'},
        body: JSON.stringify(phone),
         cache: 'no-cache'

        },



    );

    if (!response.ok)  throw new Error(response.statusText);

    return response.json();

}

async function  processForm() {
    if (await storeUser()) {
        if (await sendWhats()) {
            return true;
        }
    }
    return false;
}


function sucess() {
    return (
        <div>
            <h1>Deu certo</h1>
        </div>
    )
}

function error() {
    return (
        <div>
            <h1>Deu errado</h1>
        </div>
    )
}



export default async function checkout(user: User) {
    const response = await processForm();
    console.log(response);
    if (response) return sucess();
    else return error();
}

