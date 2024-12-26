import { Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterForm from './Components/Auth/RegisterForm';
import LoginForm from './Components/Auth/LoginForm';
import Layouts from './Components/Layouts';
import { Profile } from './Pages/Profile.tsx';
import {Home} from './Pages/Home.jsx';

function App() {
  return (
    <div>
        <Routes>
          <Route element={<Layouts/>}>

            <Route path='/login' element={<LoginForm/>} />
            <Route path='/register' element={<RegisterForm/>} />
            <Route path='/home' element={<Home/>} />
            <Route path="/profile" element={
                  <Profile />
              } />
          </Route>  
        </Routes>
    </div>
  );
}

export default App;
