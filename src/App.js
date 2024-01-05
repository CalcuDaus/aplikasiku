import Anak from "./components/conditional-rendering";
import Helo from "./components/event";
import FirstComponent from "./components/first-component";
import HobiMount from "./components/lifecyle/mounting";
import Unmounting from "./components/lifecyle/unmounting";
import Updating from "./components/lifecyle/updating";
import List from "./components/list";
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
    <Anak nama="daus" umur="17"/>
    <List/>
    </>
  );
}

export default App;
