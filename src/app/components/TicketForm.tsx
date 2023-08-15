import Email from "@/app/components/inputs/Email";
import Birthday from "@/app/components/inputs/Date";
import ButtonDefault from "@/app/components/Button";

export default function TicketForm() {
    return (
        <section className="max-w-4xl p-6 mx-auto  rounded-md shadow-md bg-gray-800">
            <h2 className="text-lg font-semibold  text-white font-body">Preencha seus dados</h2>

            <form>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className=" text-white font-body" htmlFor="name">Nome Completo</label>
                        <input id="name" type="text"
                               className="block w-full bg-gray-900 px-4 py-2 mt-2   border  rounded-md  text-gray-300 border-gray-600 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>



                    <div>
                        <label className="text-white font-body" htmlFor="whats">WhatsApp</label>
                        <input id="whats" type="text"
                               className="block bg-gray-900 w-full px-4 py-2 mt-2 border  rounded-md  text-gray-300 border-gray-600  focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>

                    <Email />

                    <div>
                        <label className="text-white" htmlFor="profissao">Profissão</label>
                        <input id="profissao" type="text"
                               className="block bg-gray-900 w-full px-4 py-2 mt-2   border  rounded-md  text-gray-300 border-gray-600 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring"/>
                    </div>

                    <Birthday />
                </div>

                <div className="flex justify-end mt-6">

                    <ButtonDefault text={"Enviar"} />
                </div>
            </form>
        </section>
    )
}
