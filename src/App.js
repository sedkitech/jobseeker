
import About from './pages/About';
import Home from './pages/Home';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout';
import { Navbar } from './components/Navbar';
import { HelpLayout } from './layouts/HelpLayout';
import { Faq } from './pages/help/Faq';
import { Contact, contactFormAction } from './pages/help/Contact';
import { NotFound } from './pages/NotFound';
import { CareersLayout } from './layouts/CareersLayout';
import { Careers } from './pages/Careers/Careers';
import { CareersLoader } from './utilities/loaders/CareersLoader';
import { CareerDetails } from './pages/Careers/CareerDetails';
import { CareerDetailsLoader } from './utilities/loaders/CareerDetailsLoader';
import { RouteError } from './components/RouteError';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='help' element={<HelpLayout />} >
          <Route path='faq' element={<Faq />} />
          <Route path='contact' element={<Contact />} action={contactFormAction} />
        </Route>
        <Route path='careers' element={<CareersLayout />}
          errorElement={<RouteError />}
        >
          <Route
            index
            element={<Careers />}
            loader={CareersLoader}
          />
          <Route
            path=':id'
            element={<CareerDetails />}
            loader={CareerDetailsLoader}
          />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )
  return (
    <div className="App">
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </div>

  );
}

export default App
