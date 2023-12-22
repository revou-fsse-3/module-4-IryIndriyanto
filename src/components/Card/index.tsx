import { ReactNode } from "react";

interface Props {
    children : ReactNode
}

const Card = ({ children } : Props) => {
    return (
        <div className=" mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 ">
            { children }
        </div>
    )
}

export default Card