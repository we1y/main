import { BrowserRouter, Route, Routes } from "react-router-dom";
import Atlas from "./Pages/Atlas";
import ItemPage from "./Pages/ItemPage";
import ScrollToTop from "./components/ScrollToTop";
import Main from "./Pages/Main";
import SpecialtyPage from "./Pages/SpecialtyPage";
import ProfOrient from "./Pages/ProfOrient";




function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
      <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/atlas" element={<Atlas />} />
      <Route path="/proforient" element={<ProfOrient />} />
      <Route path="industry/:id" element={<ItemPage />}/>
      <Route path="specialty/:id" element={<SpecialtyPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
