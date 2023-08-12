'use client';
import clsx from "clsx";

interface ButtonProps {
    className?: string
    text: string
}




export default function ButtonDefault(props: ButtonProps) {
    return (
        <button className={`${clsx(props.className, "rounded-full",
        "btn", "bg-polkadot-rose","text-white","hover:opacity-80 hover:bg-polkadot-rose")}`} >
              {props.text}
        </button>
)




}


