import React from 'react'
import { NavLink } from 'react-router-dom';

export const Help = () => {
    return (
        <div className='help-layout'>
            <h2>Website Help</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>

            <nav>
                <NavLink to='faq' >View Faq</NavLink>
                <NavLink to='contact'>Contact us</NavLink>
            </nav>
        </div>
    )
}
