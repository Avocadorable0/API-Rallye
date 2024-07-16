import About from "./components/About";
import Home from "./components/Home";
import Layout from "./components/Layout";
export const route = [
    {
        path: "/",
        element: <Layout />
    },
    {
        path: "/Home",
        element: <Home/>
    },
    {
        path: "/About",
        element: <About />
    }
]