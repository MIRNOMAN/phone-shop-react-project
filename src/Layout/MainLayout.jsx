import { Outlet, useLocation } from "react-router-dom";
import Navber from "../Components/Header/Navbar/Navber";
import Footer from "../Components/Header/Footer/Footer";
import { useEffect } from "react";


const MainLayout = () => {
    const loc = useLocation()
     
    useEffect( ()=> {
        if(loc.pathname === '/'){
            document.title = `phone-home`
        }else{
            document.title = `phone ${loc.pathname.replace("/",'-')}`
        }
        if(loc.state){
            document.title = `${loc.state}`
        }
    },[loc.pathname])




    return (
        <div className="max-w-6xl mx-auto">
            <Navber></Navber>
            <div className="py-10">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;