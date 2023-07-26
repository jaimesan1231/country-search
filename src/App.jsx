import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import CountriesGrid from "./components/CountriesGrid/CountriesGrid";
import Searchbar from "./components/Searchbar/Searchbar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Searchbar />
        <CountriesGrid />
      </div>
    </div>
  );
}

export default App;
