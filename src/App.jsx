import { Header, Summary } from "./components";
import "./App.css";
import { GetToKnow, Projects } from "./features";

function App() {
  return (
    <>
      <Header />

      <div className="flex items-start justify-center flex-col gap-5">
        <Summary />
        <GetToKnow />
        <Projects />
      </div>
    </>
  );
}

export default App;
