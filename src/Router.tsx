import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/index';
import { DefaultLayout } from './layouts/DefaultLayout';
import { About } from './Pages/About';
import { Projects } from './Pages/Projects';
import { Contact } from './Pages/Contact';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />

            </Route>
        </Routes>
    )
}