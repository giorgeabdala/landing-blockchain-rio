import Email from "@/app/components/inputs/Email";
import Birthday from "@/app/components/inputs/Date";
import ButtonDefault from "@/app/components/Button";
import {useState} from "react";

export default function TicketForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whats, setWhats] = useState("");
    const [formattedWhats, setFormattedWhats] = useState("");
    const [birthday, setBirthday] = useState("");
    const [occupation, setOccupation] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const userObject = {
            name,
            email,
            whatsapp: formattedWhats, // Use the formatted WhatsApp value
            occupation,
            birthday,
            event: process.env.NEXT_PUBLIC_EVENT_ID,
        };

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_URL + '/api/user', {
                // ... Your fetch configuration ...
                body: JSON.stringify(userObject),
            });

            if (response.ok) {
                // Navigate to the checkout page with the user object as a query parameter
                router.push({
                    pathname: "/checkout",
                    query: { user: JSON.stringify(userObject) },
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Function to format WhatsApp number
    const formatWhatsApp = (input) => {
        const cleanedInput = input.replace(/\D/g, ""); // Remove non-digit characters
        const countryCode = cleanedInput.slice(0, 2);
        const phoneNumber = cleanedInput.slice(2);
        return `(${countryCode})-${phoneNumber}`;
    };

    // Handle WhatsApp input change
    const handleWhatsAppChange = (e) => {
        const inputValue = e.target.value;
        setWhats(inputValue);
        const formattedValue = formatWhatsApp(inputValue);
        setFormattedWhats(formattedValue);
    };



    return (
        <section className="max-w-4xl p-6 mx-auto  rounded-md shadow-md bg-gray-800">
            <h2 className="text-lg font-semibold  text-white font-body">Preencha seus dados</h2>

            <form onSubmit={handleFormSubmit}> {/* Use the handleFormSubmit function */}
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className=" text-white font-body" htmlFor="name">Nome Completo</label>
                        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}
                               className="block w-full bg-gray-900 px-4 py-2 mt-2   border  rounded-md  text-gray-300 border-gray-600 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring">
                        </input>
                    </div>

                    <div>
                        <label className="text-white font-body" htmlFor="whats">
                            WhatsApp
                        </label>
                        <input
                            id="whats"
                            type="text"
                            value={formattedWhats} // Display formatted WhatsApp
                            onChange={handleWhatsAppChange}
                            placeholder="(XX) 00000-0000"
                            className="block bg-gray-900 w-full px-4 py-2 mt-2 border rounded-md text-gray-300 border-gray-600 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"
                        />
                    </div>

                    <Email value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <div>
                        <label className="text-white"  htmlFor="profissao">Profissão</label>
                        <input id="profissao" type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)}
                               className="block bg-gray-900 w-full px-4 py-2 mt-2   border  rounded-md  text-gray-300 border-gray-600 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>

                    <Birthday  value={birthday} onChange={(e) => setBirthday(e.target.value)}/>
                </div>

                <div className="flex justify-end mt-6">

                    <div className="flex justify-end mt-6">
                        <ButtonDefault type="submit" text={"Enviar"} /> {/* Use type="submit" */}
                    </div>
                </div>
            </form>
        </section>
    )
}
