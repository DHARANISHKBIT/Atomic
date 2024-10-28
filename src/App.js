import './App.css';
import Signpage from './Pages/Sign';
import Welcomepage from './Pages/Welcomepage';
import Forgetpage from './Pages/Forgetpage'
import Resetpage from './Pages/Resetpage';
import Pageroute from './Routes/Pageroute';
import Sidebar from './Components/Sidebar.jsx/Sidebar';
import Header from './Components/Header/Header';
import Main from './Components/Mainpage/Main';
import Full from './Components/Full/Full';
import Fullpage from './Pages/Fullpage';
import  Drawer  from './Components/Mainpage/Drawer.jsx';
import Filter from './Components/Filter/Filter.jsx'

function App() {
  return (
    <div className="App">
     <Pageroute />
    </div>
  );
}

export default App;
