import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Searchbar from "./components/Searchbar/Searchbar";
import { Route, Routes } from "react-router-dom";
import SearchResults from "./components/SearchResults/SearchResults";
import Home from "./components/Home/Home";
import Continents from "./components/Continents/Continents";
import ContinentFilter from "./components/ContinentFilter/ContinentFilter";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Searchbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/continents" element={<Continents />} />
          <Route path="/continents/:continent" element={<ContinentFilter />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
