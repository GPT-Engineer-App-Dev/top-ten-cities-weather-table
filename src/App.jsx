import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import WeatherTable from "./pages/WeatherTable.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/weather" element={<WeatherTable />} />
      </Routes>
    </Router>
  );
}

export default App;
