import logo from './logo.svg';
import './App.css';
import Button from './Button'
import { MainContainer } from './styles';

function App() {
  return (
    <div className="App">
        <div>
          <img src={logo} className="App-logo" alt="logo" />  
        </div>
        <MainContainer>
          <Button>Default</Button>
          <Button success>Success</Button>
          <Button error>Error</Button>
          <Button warning>Warning</Button>
          <Button info>Info</Button>
        </MainContainer>
    </div>
  );
}

export default App;
