mport logo from './logo.svg';
import './App.css';
import Navbar from './Componenets/Navbar';
import Text from './Componenets/Text';


function App() {
  return (
    <>
   
<Navbar Home="MyHome" Link="About" Dropdown="Services"Disabled="ContactUS"></Navbar>

  <div class="container">
  <Text Haeding="Enter Text to Analyze"></Text>
  </div>

  </>

  );
}

export default App;
