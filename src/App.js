import './App.css';
import Homepage from './page/homepage/homepage.component';
import { Route, Routes } from "react-router";
import Shop from './page/shop/shop.components'
import Header from './components/header/header.component'
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up'

function App() {

  return (
          <div>
            <Header/>
            <Routes>
              <Route index path="/" element={<Homepage/>}/>
              <Route path="shop" element={<Shop/>}/>
              <Route path="signIn" element={<SignInAndSignUp/>}/>
            </Routes>
          </div>
  );
}

export default App;
