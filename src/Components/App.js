import MyInfo from "./MyInfo";
import Header from "./Header"
import Footer from "./Footer";
import MainContent from "./MainContent";
import './App.css'

function App(){

    return (
        <div>
            <Header/>
            <MainContent/>
            <MyInfo/>
            <Footer/>

            <input type = "checkbox"/>
            <p>Event 1</p>

            <input type = "checkbox"/>
            <p>Event 2</p>
            
            <input type = "checkbox"/>
            <p>Event 3</p>

            <a href="https://www.sitepoint.com/react-components-styling-options/">css reference</a>
        </div>
    );
}

export default App