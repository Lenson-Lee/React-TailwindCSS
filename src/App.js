import logo from "./logo.svg";
import "./App.css";
import "./asset/tailwind.css"; //커스텀 css용

function App() {
  return (
    <div className="App">
      <div className="bg-yellow-300 w-1/3 text-2xl text-sky-400">Hello</div>
      <div className="bg-sky-400 w-1/3 text-6xl text-blue-500">World</div>
      <div className="bg-yellow-300 w-1/3 text-2xl text-sky-400">Hello</div>
    </div>
  );
}

export default App;
