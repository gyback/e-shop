import {Routes, Route} from 'react-router-dom';

import Navbar from './routes/navbar/navbar.component';
import Home from "./routes/home/home.component";
import SignIn from './routes/sign-in/sign-in-component';


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home />} />
        <Route path='shop' element={<h1>This is the Shop</h1>}/>
        <Route path='sign-in' element = {<SignIn/>} />
        <Route path='hats' element={'Hats Page'} />

      </Route>
    </Routes> 
  );
}

export default App;
