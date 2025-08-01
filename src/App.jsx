// App.jsx
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Outlet,
} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Loader from "./Home/Loader";

function LayoutWithLoader({ children }) {
  const location = useLocation();
  const [ready, setReady] = useState(false);
  const [routeKey, setRouteKey] = useState(location.pathname + location.search);

  // whenever location changes, trigger loader
  useEffect(() => {
    // bump key to retrigger effect if same path with query changes
    setRouteKey(location.pathname + location.search);
    setReady(false);
  }, [location]);

  return (
    <>
      <Loader
        key={routeKey} // remounts loader on each route change
        minDuration={800}
        onDone={() => {
          setReady(true);
        }}
      />
      <div
        className={`transition-opacity duration-500 ${
          ready ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LayoutWithLoader>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* add other routes here */}
        </Routes>
      </LayoutWithLoader>
    </BrowserRouter>
  );
}

export default App;
