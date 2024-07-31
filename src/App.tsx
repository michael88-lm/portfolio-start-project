import './App.css';
import {Header} from './layout/header/Header';
import { Hobby } from './layout/sections/hobby/Hobby';
import { Works } from './layout/sections/works/Works';
import {Slogan} from './layout/sections/slogan/Slogan';
import { Footer } from './layout/footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/> 
            <Works/>
            <Hobby/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;

;

