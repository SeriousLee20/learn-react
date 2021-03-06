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
import ConditionalRender from './ConditionalRender';
import ChangState from './ChangeState';

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

    // constructor always has super()
    // Constructor is used to initialize the state of a class
    // ***this.state pass values in a class
    // ***this.props get value from other component
    constructor() {
        super()
        this.state = {answer: "Yes."}
    }

    render(){

        const jokeComponent = jokesData.map(joke => <Joke key ={joke.id} question = {joke.question} punchLine = {joke.punchLine}/>)
        const productComponent = products.map(product => <Product id = {product.id} item = {product}/>)

        return (

            <div>
                <Header username = "Amber"/>
                <MainContent answer = {this.state.answer}/>
                <MyInfo/>
                <Footer/>
                <Contacts/>
                {jokeComponent}                
                {productComponent}
                <ConditionalRender/>
                <ChangState/>
                
                <a href="https://www.sitepoint.com/react-components-styling-options/">css reference</a><br/>
                <a href="https://www.w3schools.com/tags/tag_input.asp">html input</a>
            </div>
        );
    }
}

export default App


/**
 * Other modern/advanced React features/topics to learn:
 * 
 * Official React Context API - https://reactjs.org/docs/context.html
 * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
 * render props - https://reactjs.org/docs/render-props.html
 * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
 * React Router - https://reacttraining.com/react-router/core/guides/philosophy
 * React Hooks - https://reactjs.org/docs/hooks-intro.html
 * React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html
 */