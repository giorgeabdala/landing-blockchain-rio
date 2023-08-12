
interface PaginaProps {
    children?: React.ReactNode;
    className?: string;
}

export default function Pagina(props: PaginaProps) {
    function renderChildren() {
        return (
            <div className={`flex flex-col min-h-screen 
                bg-gradient-to-r from-black via-zinc-800 to-black
                ${props.className ?? ''}
                `}>
                {props.children}
            </div>
        );
    }

    return renderChildren();
}


