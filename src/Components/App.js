import './App.css'
import MyInfo from "./MyInfo";
import Header from "./Header"
import Footer from "./Footer";
import MainContent from "./MainContent";
import Contacts from "./Contacts";
import Joke from "./Joke";
import jokesData from "./jokesData";
import products from "./vschoolProducts";
import Product from "./Product";
import React from "react";

/*function App(){

    const jokeComponent = jokesData.map(joke => <Joke key ={joke.id} question = {joke.question} punchLine = {joke.punchLine}/>)
    const productComponent = products.map(product => <Product id = {product.id} item = {product}/>)

    return (

        <div>
            <Header/>
            <MainContent/>
            <MyInfo/>
            <Footer/>
            <Contacts/>
            
            <div>
                {jokeComponent}
            </div>

            {productComponent}

            <a href="https://www.sitepoint.com/react-components-styling-options/">css reference</a><br/>
            <a href="https://www.w3schools.com/tags/tag_input.asp">html input</a>
        </div>
    );
}*/

class App extends React.Component{
    render(){

        const jokeComponent = jokesData.map(joke => <Joke key ={joke.id} question = {joke.question} punchLine = {joke.punchLine}/>)
    const productComponent = products.map(product => <Product id = {product.id} item = {product}/>)

    return (

        <div>
            <Header/>
            <MainContent/>
            <MyInfo/>
            <Footer/>
            <Contacts/>
            
            <div>
                {jokeComponent}
            </div>

            {productComponent}

            <a href="https://www.sitepoint.com/react-components-styling-options/">css reference</a><br/>
            <a href="https://www.w3schools.com/tags/tag_input.asp">html input</a>
        </div>
    );
    }
}

export default App