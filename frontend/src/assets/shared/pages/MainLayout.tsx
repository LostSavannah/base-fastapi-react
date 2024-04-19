import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';


export default function MainLayout(){
    const pages = [
        {
            location: "/home-page",
            text: "Home",
        },
        {
            location: "/about-page",
            text: "About",
        }
    ]
    return <>
    <div className="w-100 d-flex h4 bg-dark p-3 text-light">
        <span className="p-3">Something</span>
    </div>
    <div className="w-100 bg-dark d-flex">
        {pages.map(p => <Link key={p.location} to={p.location}>
                        <button className="btn btn-dark w-100 m-1">
                            {p.text}
                        </button>
                    </Link>)}
    </div>
    <Outlet></Outlet>
    </>
}