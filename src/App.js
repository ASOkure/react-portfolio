import Header from "./components/Header";
import Profile from "./pages/Profiles";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Profile userName="octocat" />
    </div>
  );
}

export default App;
