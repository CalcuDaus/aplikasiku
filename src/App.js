import Helo from "./components/event";
import FirstComponent from "./components/first-component";
import HobiMount from "./components/lifecyle/mounting";
import Unmounting from "./components/lifecyle/unmounting";
import Updating from "./components/lifecyle/updating";
import FirstState from "./components/state";
function App() {
  return (
    <>
    <FirstComponent/>
    <FirstState/>
    <HobiMount nama="melukis"/>
    <Updating/>
    <Unmounting/>
    <Helo/>
    </>
  );
}

export default App;
