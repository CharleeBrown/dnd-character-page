import logo from './logo.svg';
import './App.css';
import ClassPick from './components/ClassPick/ClassPick.tsx'
import {ChakraProvider} from  'chakra-ui'
function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <header className="App-header">
       <ClassPick></ClassPick>
      </header>

    </div>
    </ChakraProvider>
  );
}

export default App;
