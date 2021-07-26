import MyInfo from "./MyInfo";
import Header from "./Header"
import Footer from "./Footer";
import MainContent from "./MainContent";
import Contacts from "./Contacts";

import './App.css'

function App(){

    return (
        <div>
            <Header/>
            <MainContent/>
            <MyInfo/>
            <Footer/>
            <Contacts/>
            
            <a href="https://www.sitepoint.com/react-components-styling-options/">css reference</a><br/>
            <a href="https://www.w3schools.com/tags/tag_input.asp">html input</a>
        </div>
    );
}

export default App