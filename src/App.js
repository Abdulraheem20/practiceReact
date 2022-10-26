import './App.css';
import FakeStore from './component/FakeStore';
import Form from "./component/Form";
import NavBarr from './component/NavBarr';
import RandNumm from './component/RandNumm';

function App() {
  return (
    <div className="App">
      <NavBarr/>
      <Form/>
      <FakeStore/>
      <RandNumm/>
    </div>
  );
}

export default App;
