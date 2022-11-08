import './App.css';
import FakeStore from './component/FakeStore';
import Form from "./component/Form";
import FooterMQ from './component/HumbleFooter';
import NavBarr from './component/NavBarr';
import RandNumm from './component/RandNumm';
import Shop from './component/Shop';

function App() {
  return (
    <div className="App">
      <NavBarr/>
      <Form/>
      <Shop/>
      <FakeStore/>
      <RandNumm/>
      <FooterMQ/>
    </div>
  );
}

export default App;
