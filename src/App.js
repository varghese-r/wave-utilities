import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import WUProvider from "./context/WUProvider";

function App() {
  return (
    <WUProvider>
      <Header />
      <Body />
    </WUProvider>
  );
}

export default App;
