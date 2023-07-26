import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Form_Ex from './Form_Ex';
import Travel_types from './Travel_types';
import Blog from './Blog';

function App() {
  return (
    // <h1>hello</h1>
      <>
        <Navbar/>
        {/* <Form_Ex/> */}
        <Travel_types />
        <Blog/>
      </>
    );
}

export default App;
