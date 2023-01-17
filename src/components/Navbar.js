import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <header>
            <nav>
                <h1>JobSeeker</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='help'>Help</NavLink>
                <NavLink to='careers'>Careers</NavLink>
            </nav>
        </header>
    )
}
