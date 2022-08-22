import './App.css';
import HomePage from "./pages/HomePage";

import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesList from "./pages/ArticlesList";
import NavBar from "./NavBar";

const App = () => {
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <div className="page-body">
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/about' element={<AboutPage/>} exact/>
                        <Route path='/article' element={<ArticlePage/>} exact/>
                        <Route path='/articles-list' element={<ArticlesList/>} exact/>
                    </Routes>
                </div>
            </div>
        </Router>

    )
}

export default App;
