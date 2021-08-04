// import logo from './logo.svg';
// import './App.css';
import { Route } from 'react-router-dom';

import Login from './components/Login/Login.js';

function App() {
  return (
    <>

      <Route path="/login" component={Login}/>


    </>
  );
}

export default App;
