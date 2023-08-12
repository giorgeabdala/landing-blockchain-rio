
interface CardProps {
    image: string
    alt: string
    title: string
    description: string

}
export default function Card(props: CardProps) {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={props.image} alt={props.alt}
                         className="rounded-xl"/>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{props.title}</h2>
                    <p>{props.description}</p>

                </div>
            </div>
        </div>

    )
}