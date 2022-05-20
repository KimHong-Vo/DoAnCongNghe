
import Menu from './components/Shared/Menu/Menu'
import './App.scss';
import NavigationBar from './components/Shared/NavigationBar/NavigationBar';
function App() {
  return (
    // <div className="main">
    //   <Menu />
    //   <div className="container">
    //     <h1 className="title">My React App</h1>
    //     <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    //     <button className="btn">Explore now</button>
    //   </div>
    // </div>

    <div className="App">
      <NavigationBar />
      <h1>Quản Lí Công Việc</h1>
    </div>
  )
}

export default App