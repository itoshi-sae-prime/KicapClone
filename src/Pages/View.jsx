import { useRoutes } from "react-router-dom";
import Home from "./Index/Home";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { KCPage } from "./KeycapPage/KCPage";
import PDPage from "./ProductPage/PDPage";
import Blog from "./Blog/Blog";
import GTPage from "./GioiThieu/GTPage";
import LHPage from "./LienHe/LHPage";
import CSBHPage from "./ChinhSachBaoHanh/CSBHPage";
import CSDTPage from "./ChinhSachDoiTra/CSDTPage";
import Login from "./Login/Login";

export const View = () => {
    const element = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/keycap-bo', element: <KCPage/> },
        { path: '/keycap-bo/keycap-pbt', element: <PDPage/> },
        { path: '/blog', element: <Blog/> },
        { path: '/gioi-thieu', element: <GTPage/>},
        { path: '/lien-he', element: <LHPage />},
        { path: '/chinh-sach-bao-hanh', element: <CSBHPage />},
        { path: '/chinh-sach-doi-tra', element: <CSDTPage />},
        { path: '/login', element: <Login />}
    ]);
    return(
        <>
            <Header />
            <Navbar />
            {element}
            <Footer />
        </>
    )
}