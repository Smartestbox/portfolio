import React from 'react';
import style from './App.module.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className={style.app}>
            <Header/>
            <Main />
            <Skills />
            <Projects />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
