'use client'
import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
    className?: string;
    text: string;
    link?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export default function ButtonDefault(props: ButtonProps) {
    const handleClick = () => {
        if (props.onClick) {
            props.onClick();
        }
    };

    return (
        <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            type={props.type}
            onClick={props.onClick ? (e) => { e.preventDefault(); handleClick(); } : undefined}
        >
            <button
                className={clsx(
                    props.className,
                    'rounded-full',
                    'btn',
                    'bg-polkadot-rose',
                    'text-white',
                    'hover:opacity-80',
                    'hover:bg-polkadot-rose'
                )}
            >
                {props.text}
            </button>
        </a>
    );
}
