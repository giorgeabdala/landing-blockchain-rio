'use client';

import {Button} from "@mantine/core";
import clsx from "clsx";

interface ButtonProps {
    className?: string
    text: string
}


export default function ButtonDefault(props: ButtonProps) {
    return (
        <Button className={`${clsx(props.className, "rounded-full", 
                            "bg-polkadot-rose", "text-white","font-body")}`}
                variant="filled"
                color="pink">
            {props.text}
        </Button>
    )




}