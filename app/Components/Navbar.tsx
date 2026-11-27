type NavbarProps ={
    name: string;
    age: string;
};

export default function Navbar(props: NavbarProps){
    return(
        <div>
            <h1>
                Салам {props.name} and his age {props.age}
            </h1>
        </div>
    )
}
