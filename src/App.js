import './App.css';
import Catalogue from './components/Catalogue';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {

  return (
    <div className="App" style={{ textAlign : "center" }}>
           <Header />
           <Catalogue />
           <Footer />
    </div>

  );
}

export default App;
