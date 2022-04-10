import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
import "./App.css";
import Donut from "./components/Chart.js";
 
function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>24HoursTracker</h1>
        <div className="section">
          <Donut />
        </div>
      </div>
    </div>
  );
}
 
export default App;