
interface HeaderProp {
    titulo: string;
}

export const Header = ({ titulo }: HeaderProp) => {
    return (

        <div className="container-fluid bg-primary bg-gradient">
            <h1 className="p-3 text-center text-light fs-2">{titulo}</h1>
        </div>
    )
}
