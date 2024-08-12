import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

import Home from "./routes/home/home.components";
import Authentication from "./routes/authentication/authentication.component";
import ShopPage from "./routes/shop/shop.component";

 

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="auth" element={<Authentication />}/>
          
        </Route>
      </Routes>
    </>
  );
};

export default App;
