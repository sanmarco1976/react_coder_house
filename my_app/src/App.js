import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
    return (
        <div className = "App" >
            <header className = "App-header" >
                <NavBar />
            </header> 
            <ItemListContainer greeting={"FELIXA"} />
            <ItemCount />
        </div >
    );
}

export default App;