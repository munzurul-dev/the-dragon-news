import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import NavBar from "../Components/NavBar";



const HomeLayout = () => {
    return (
        <div>
            <header> 
                <Header></Header>
                <section>
                   <LatestNews></LatestNews>
                </section>
                <nav>
                    <NavBar></NavBar>
                </nav>
            </header>
            <section className="left_nav"></section>
             <section className="main">
                <Outlet></Outlet>
             </section>
              <section className="right_nav"></section>
        </div>
    );
};

export default HomeLayout;