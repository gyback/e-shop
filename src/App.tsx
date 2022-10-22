import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes} from 'react-router-dom';
import { useEffect } from 'react';
import { createUserDocumentFromAuth, OnAuthStateChangeListener } from './utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux/es/exports';

import Navbar from './routes/navbar/navbar.component';
import Home from "./routes/home/home.component";
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

import { setCurrentUser } from './store/user/user.slice';

const App = () => {

  const dispatch = useDispatch();

  useEffect(()=> {
    const unsubscribe = OnAuthStateChangeListener((user) => {
      if (user) createUserDocumentFromAuth(user);
      
      dispatch(setCurrentUser(user));
    })
    
    return unsubscribe;
  }, []);

 

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
