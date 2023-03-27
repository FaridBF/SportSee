import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from './pages/Page404/Page404';
import Home from './pages/Home/Home';

/**
 * Router is a variable that represents a browser router for the application.
 * The router is created using the `BrowserRouter` function from the `react-router-dom` library.
 * The JS element consists of a root `Route` element with several nested `Route` elements.
 * Each nested `Route` element defines a different route for the application, with a corresponding path and element to render.
 * The `App` component is used as the root element for all routes, and the other elements are used to render the various pages of the application.
 * @type {Router}
 */

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Page404 />} />
          <Route path='/error' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
