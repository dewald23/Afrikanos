/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Tours from './pages/Tours';
import Diving from './pages/Diving';
import Restaurant from './pages/Restaurant';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Legal from './pages/policies';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main Clean Routes */}
          <Route index element={<Home />} />
          <Route path="tours" element={<Tours />} />
          <Route path="diving" element={<Diving />} />
          <Route path="restaurant" element={<Restaurant />} />
          <Route path="menu" element={<Menu />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="legal" element={<Legal />} />

          {/* HTML Extension Fallback Routes for Static Style Matching */}
          <Route path="index.html" element={<Home />} />
          <Route path="tours.html" element={<Tours />} />
          <Route path="diving.html" element={<Diving />} />
          <Route path="restaurant.html" element={<Restaurant />} />
          <Route path="menu.html" element={<Menu />} />
          <Route path="gallery.html" element={<Gallery />} />
          <Route path="contact.html" element={<Contact />} />
          <Route path="legal.html" element={<Legal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
