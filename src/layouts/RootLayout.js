import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Breadcrumbs } from './../components/Breadcrumbs';

export const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Breadcrumbs />
                <Outlet />
            </main>
        </div>
    )
}
