import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CRM from "./testPage/CRM";

// import Navbar from "./component/Navbar";
// import HomePage from "./pages/HomePage";
// import Customer from "./pages/Customer";
// import Payment from "./pages/Payment";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/customer" element={<Customer />} /> */}
        {/* <Route path="/payment" element={<Payment />} /> */}
        <Routes>
          <Route path="/" element={<CRM />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
