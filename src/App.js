// import logo from "./logo.svg";
// import { useContext } from "react";
import "./App.css";

// import Header from "./Components/Header";
// import MainBg from "./Components/MainBg";
import Homepage from "./Components/SideMenu/Homepage";
import SideMenu from "./Components/SideMenu/SideMenu";
// import MarvelContext from "./Context/GlobalContext";

function App() {
    // const { showMenu } = useContext(MarvelContext);

    return (
        <div className='App'>
            {/* <h1 className='text-3xl font-bold underline'>MARVEL!</h1> */}
            <SideMenu />
            <Homepage />
            {/* <section
                className={`${showMenu ? "active" : ""} relative main-section`}>
                <MainBg />
                <Header />
            </section> */}
        </div>
    );
}

export default App;
