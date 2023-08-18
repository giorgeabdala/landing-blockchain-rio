'use client'

import TwitterModal from "@/app/components/TwitterModal";
import FormModal from "@/app/components/FormModal";
import React, {useState} from "react";
import ButtonDefault from "@/app/components/Button";


export default function Modals() {
    const [twitterModal, setTwitterModal] = useState(false);
    const [formModal, setFormModal] = useState(true);
    return (
        <div>
            <ButtonDefault
                text="Garanta seu passaporte"
                onClick={() => setTwitterModal(true)}
            />

            <TwitterModal isOpen={twitterModal} setOpen={setTwitterModal} nextStep={() => setFormModal(true)} />
            <FormModal isOpen={formModal} setIsOpen={setFormModal}/>


        </div>
    )
}