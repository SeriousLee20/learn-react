import MyInfo from "./MyInfo";
import Header from "./Header"
import Footer from "./Footer";
import MainContent from "./MainContent";
import Contacts from "./Contacts";

import './App.css'
import Joke from "./Joke";

function App(){

    return (
        <div>
            <Header/>
            <MainContent/>
            <MyInfo/>
            <Footer/>
            <Contacts/>
            
            <div>
                <Joke punchLine="hahaha"/>
                <Joke quest="What is the best thing about Switzerland?" punchLine="I don't know but the flag is a big plus!"/>
                <Joke quest="What is the best thing about Switzerland?" punchLine="I don't know but the flag is a big plus!"/>
                <Joke quest="What is the best thing about Switzerland?" punchLine="I don't know but the flag is a big plus!"/>
                <Joke quest="What is the best thing about Switzerland?" punchLine="I don't know but the flag is a big plus!"/>
                <Joke quest="What is the best thing about Switzerland?" punchLine="I don't know but the flag is a big plus!"/>
            </div>

            <a href="https://www.sitepoint.com/react-components-styling-options/">css reference</a><br/>
            <a href="https://www.w3schools.com/tags/tag_input.asp">html input</a>
        </div>
    );
}

export default App