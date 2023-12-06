import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemCount stock="5" initial="1"/>
    </div>
  );
}
