import { Route, Routes } from "react-router-dom";
import MenuPage from "../pages/menu";


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<MenuPage/>} />
        </Routes>
    );
};

export default AppRoutes;