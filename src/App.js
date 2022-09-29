import Exercises from './components/Exercises/Exercises';
import './App.css';
import Answer from './components/Answer/Answer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Exercises/>
      <Answer/>
      <Footer/>
    </div>
  );
}

export default App;
