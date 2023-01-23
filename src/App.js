import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Page404 from './pages/Page404/Page404';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCopyright } from '@fortawesome/free-regular-svg-icons';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import {
//   faChevronDown,
//   faChevronRight,
//   faChevronLeft
// } from '@fortawesome/free-solid-svg-icons';

// library.add(faCopyright, faStar, faChevronDown, faChevronRight, faChevronLeft);

/**
 * Gestion de nos routes via BrowserRouter (react-router-dom)
 * Il stocke l'emplacement actuel dans la barre d'adresse du navigateur à l'aide d'URL propres puis y navigue
 */
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='*' element={<Page404 />} />
        <Route path='/error' element={<Page404 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
