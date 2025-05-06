import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import GreetingComponent from './components/GreetingComponent';
import ItemList from './components/ItemList';
import LoginComponent from './components/LoginComponent';
import StyledComponent from './components/StyledComponent';
import {InlineCss} from './components/StyledComponent';

function App() {
  const fruits = ["Apple", "Bananna", "Pappaya", "Oranges"];

  return (
    <>
      <FunctionalComponent/>
      <GreetingComponent name="John" />
      <StyledComponent />
      <InlineCss />
      <ItemList fruits={fruits} />
      <LoginComponent isLoggedIn={false} /><br />
      <LoginComponent isLoggedIn={true} />
    </>
  );
}

export default App;
