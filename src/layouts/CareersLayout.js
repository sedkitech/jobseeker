import { Outlet } from 'react-router-dom'
import { AddCareer } from '../pages/Careers/AddCareer'

export const CareersLayout = () => {
  return (
    <div>
      <h2>        Careers      </h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>

      <main>
        <Outlet />
      </main>
    </div>

  )
}
