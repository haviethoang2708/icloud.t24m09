import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Features from "./pages/features/features";
import Home from "./pages/home/home";
import Pricing from "./pages/pricing/pricing";


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/features" Component={Features} />
          <Route path="/pricing" Component={Pricing} />
        </Routes>
    </div>
  );
}

export default App;