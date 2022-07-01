import {Routes, Route} from 'react-router-dom';

import Navbar from './routes/navbar/navbar.component';
import Home from "./routes/home/home.component";
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home />} />
        <Route path='auth' element = {<Authentication/>} />
        <Route path='checkout' element = {<Checkout />} />
        <Route path='shop/*' element={<Shop/>} />

      </Route>
    </Routes> 
  );
}

export default App;
