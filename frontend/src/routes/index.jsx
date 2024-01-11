import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { HomePage, About,GalleryPage,TeamsPage } from "../pages"
import ScrollToTop from '../hooks/useScrollToTop';
import ErrorBoundary from '../components/ErrorBoundary';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const index = () => {

    const routes = [
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "*",
            element: <h1>Not Found</h1>
        },
        {
            path: "/gallery",
            element: <GalleryPage />
        },
        {
            path: "/teams",
            element: <TeamsPage />
        }

    ]



    return (
        <Router>
            <ErrorBoundary>
                <ScrollToTop />
                <NavBar />
                <Routes>
                    {routes.map((route, idx) =>
                        <Route
                            key={idx}
                            path={route.path}
                            element={route.element}
                        />
                    )}
                </Routes>
                <Footer />
            </ErrorBoundary>
        </Router>
    )
}

export default index