import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {HomePage} from "./pages/homePage.tsx";
import {LoginPage} from "./pages/loginPage.tsx";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<LoginPage/>}/>
              <Route path="/home" element={<HomePage />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
