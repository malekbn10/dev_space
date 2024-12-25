
import RegisterForm from './Components/Auth/RegisterForm';
import React from 'react';
import { Provider } from 'react-redux'; 
import store from './store'; 
import LoginForm from './Components/Auth/LoginForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import ProfilePage from './Components/user/ProfilePage';


function App() {
  return (
    <Provider store={store}>  
    <Router>
  <Routes>
    {/* <Route path="/login" element={<LoginForm />} />  */}
    <Route path="/profile" element={<ProfilePage />} /> 
    <Route path="/register" element={<RegisterForm/> } /> 
    
  </Routes>
</Router>
     
  </Provider>
);
 
}

export default App;



    
 
