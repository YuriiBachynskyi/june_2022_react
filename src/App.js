import logo from './logo.svg';
import './App.css';
import {User} from "./components/user/User";

function App() {
  return (
      <div>
        <h1>hello</h1>
        <User name={'vasya'} age={31}/>
        <User name={'petya'} age={25}/>
      </div>
  );
}

export default App;
