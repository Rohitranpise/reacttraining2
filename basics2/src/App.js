import "./App.css";
import Alert from "./components/Alert";
import Form from "./components/Form";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Alert alert="this is alert" />
      <div className="container">
        <Form heading="enter the text" />
      </div>
    </div>
  );
}

export default App;
