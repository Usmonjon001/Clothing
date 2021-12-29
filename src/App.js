import './App.css';
import Homepage from './page/homepage/homepage.component';
import { Route, Routes } from "react-router";
import Shop from './page/shop/shop.components'

function App() {

  const HatsPage = () =>{
    return(
      <div>
        <h1>This is Hats Page...</h1>
      </div>
    )
  }

  return (
          <div>
            <Routes>
              <Route index path="/" element={<Homepage/>}/>
              <Route path="shop" element={<Shop/>}/>
              
            </Routes>
          </div>
  );
}

export default App;
