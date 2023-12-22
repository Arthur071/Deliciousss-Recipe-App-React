import Pages from "./pages/Pages";
import Catogaries from "./components/Catogaries";
import {BrowserRouter} from 'react-router-dom';
import Search from "./components/Search";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Search />
      <Catogaries />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
