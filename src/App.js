import "./App.scss";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import InputForm from "./components/InputForm/InputForm";
import {useState} from 'react';

//TOOD: authenication....

//TODO: bring this out to a LayoutComponent. set route inside it.

const username = "Robert";
const password = "123";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // TODO: create a state for username and password

  const onLogin = () => {
    //todo: compare username andpassword, if rquals, then login
    // if (password == ipnputpaswword && username === inputusername) {
      setIsAuthenticated(true);
    
  }

  const onLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="App">
      <Header  onLogout={onLogout}/>
      {isAuthenticated ?  
        <div>
          <InputForm />
          {/* <SearchBar /> */}
        </div>
        :
        <div>
          <input placeholder="username"/>
          <input placeholder="password" />
          <button onClick={() => onLogin()}>login</button>
        </div>
    }
    </div>
  );
}

export default App;
