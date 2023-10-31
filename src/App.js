import Intro from "./components/Intro";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="max-w-screen-2xl w-screen h-screen mx-auto flex">
      <div className="hidden xl:flex">
        <Intro />
      </div>
      <Signup />
    </div>
  );
}

export default App;
