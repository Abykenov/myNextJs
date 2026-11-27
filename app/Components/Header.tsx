type HeaderProps ={
    title: string;
};

export default function Header({title}: HeaderProps){
    return(
        <div>
            <h1 className="header ">{title}</h1>
        </div>
    )
}