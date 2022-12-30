import { HashRouter, Routes, Route } from "react-router-dom"
import './App.css';

import { PageTranslate } from './pages/PageTranslate/PageTranslate'
import { PageHistory } from './pages/PageHistory/PageHistory'

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path='/history' element={<PageHistory />} />
                    <Route path='/' element={<PageTranslate />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
