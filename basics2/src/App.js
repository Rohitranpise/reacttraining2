import "./App.css";
import Alert from "./components/Alert";
import ComponentA from "./components/ComponentA";
import Count from "./components/Count";
import Form from "./components/Form";
import HoverCount from "./components/HoverCount";
import Nav from "./components/Nav";
import ParentRef from "./components/ParentRef";
import Renderprops from "./components/Renderprops";
import { UserProvider } from "./components/Usercontext";
// import Ref from "./components/Ref";

function App() {
  return (
    <div className="App">
      <UserProvider value="Dharmesh">
        <ComponentA />
      </UserProvider>

      <Renderprops name={(isLoggedIn) => (isLoggedIn ? "vishwas" : "guest")} />
      <Count />
      <HoverCount />
      {/* <Ref /> */}
      <ParentRef />
      <Nav />
      <Alert alert="this is alert" />
      <div className="container">
        <Form heading="enter the text" />
      </div>
    </div>
  );
}

export default App;
