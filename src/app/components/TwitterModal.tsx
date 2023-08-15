'use client'

import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import ButtonDefault from "@/app/components/Button";
import TwitterButton from "@/app/components/TwitterButton";
import TwitterEmbed from "@/app/components/TwitterEmbed";
import {TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed";

const tweetId = '1686736224172572672';

interface TwitterModalProps {
    isOpen: boolean;
    setOpen: (value: boolean) => void;
}

export default function TwitterModal(props: TwitterModalProps) {

    const openModal = () => {
        props.setOpen(true);
    };

    const closeModal = () => {
        props.setOpen(false);
    };

    return (
        <div className="relative flex justify-center">


            {props.isOpen && (
                <Modal
                    isOpen={props.isOpen}
                    onRequestClose={closeModal}
                    className="fixed inset-0 z-10 overflow-y-auto"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="flex items-end bg-transparent justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform rounded-lg shadow-xl bg-background-primary sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6">
                            <div>

                                <TwitterTweetEmbed
                                    tweetId={tweetId}
                                />


                                <div className="flex flex-col mt-4 text-center gap-4">
                                    <h3 className=" leading-6 capitalize text-white font-bold" id="modal-title">
                                        Estamos quase lá...Siga os passos abaixo:
                                    </h3>

                                    <div className="flex flex-col mt-2 text-justify text-white font-body gap-2">
                                        <p>
                                            1 - Vamos causar um rebuliço no Twitter! Clique no botão "Retweet" abaixo e
                                            compartilhe com seus amigos a novidade. 🚀
                                        </p>
                                        <p> 2 - Depois, volte correndo pra essa mesma aba
                                            do seu navegador e preencha o formulário que será disponiblizado.
                                        </p>
                                        <p>
                                            3 -  Prepare-se para uma imersão alucinante na Blockchain Rio!
                                        </p>

                                    </div>


                                </div>
                            </div>

                            <div className="flex items-center justify-center mt-5  sm:-mx-2">
                                <TwitterButton closeModal={closeModal} tweetId={tweetId} />
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}
