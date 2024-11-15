import BodyApp from "./components/Body/BodyApp";
import SideBar from "./components/SideBar/SideBar";
import "./App.css"

function App() {
  return (
    <>
      <div id="SideBar-div">
        <SideBar />
      </div>
      
      <div id="Body-div">
        <BodyApp />
      </div>
    </>
  );
}

export default App;
