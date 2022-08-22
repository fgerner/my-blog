import './App.css';
import HomePage from "./pages/HomePage";

import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/about' element={<AboutPage/>} exact/>
                </Routes>
            </div>
        </Router>

    )
}

export default App;
