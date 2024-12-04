import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import Product from './components/header/product/product';

function App() {
  return (
    <div className="App">
    <Product price={100} name={"Iphone 16"}/>
    <Product price={200}name={"Iphone 16 pro"}/>
    <Product price={250}name={"Iphone 16 plus"}/>
    <Product proce={300} name={"Iphone 16 pro max"}/>
    </div>
  );
}

export default App;
