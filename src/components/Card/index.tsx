import { ReactNode } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children : ReactNode
}

const Card = ({ children, ...props } : Props) => {
    return (
        <div className= { `${`mx-auto max-w-xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8`} ${props.className}`}>
            { children }
        </div>
    )
}

export default Card