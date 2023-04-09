import './App.css';
import Info from "./components/Info.js"
import Content from './components/Content.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Info />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
