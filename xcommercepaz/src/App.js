import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer';




function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Catálogo'/>
      
    </div>
  );
}

export default App;
