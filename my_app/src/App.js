import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
    return (
        <div className = "App" >
            <header className = "App-header" >
                <NavBar />
            </header> 
            <ItemCount />
        </div >
    );
}

export default App;