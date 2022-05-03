import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';




function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer greeting='Catálogo'/> */}
      <ItemDetailContainer/>
      
    </div>
  );
}

export default App;
