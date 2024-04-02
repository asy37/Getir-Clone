import { BasketContextProvider } from './Context/basketContext';
import Home from './components/Home';

function App() {

  return (
    <BasketContextProvider>
      <Home/>
    </BasketContextProvider>
  );
}

export default App;

