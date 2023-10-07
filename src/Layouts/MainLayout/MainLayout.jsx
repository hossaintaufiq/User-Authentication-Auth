import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";


const MainLayout = () => {
    return (
        <div>
            <div className="w-3/4 mx-auto">
            <Header></Header>
            </div>
            
            <div className="">
            <Outlet></Outlet>

            </div>
            
        </div>
    );
};

export default MainLayout;