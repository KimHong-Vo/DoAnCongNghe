import './App.scss';
import Appbar from './components/Shared/NavigationBar/Appbar';
import NavigationBar from './components/Shared/NavigationBar/NavigationBar';
import { icons } from './utils'
function App() {
  return (
    <div className="App">
      <Appbar />
      <NavigationBar />
      <icons.logoTrello />
      <icons.switcherIcon />
      <icons.downIcon />
      <icons.searchIcon />
      <icons.informationIcon />
      <icons.notificationIcon />
      <h1>Quản Lí Công Việc</h1>
    </div>
  );
}

export default App;
