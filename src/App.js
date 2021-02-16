import logo from './logo.svg';
import './App.css';
import Greet from './components/Greets.js'
import Welcome from './components/welcome.js'
import Hello from './components/hello'
function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        <p>This is  a child</p>
      </Greet>
      <Greet name="Tony" heroName="IronMan">
        <button>Fly</button>
      </Greet>
      <Greet name="Diana" heroName="WonderWomen" />
      <Welcome name="Bruce" heroName="Batman"></Welcome>
      <Welcome name="Tony" heroName="IronMan"></Welcome>
      <Welcome name="Diana" heroName="WonderWomen"></Welcome>
     {/* <Hello> </Hello> */}
    </div>
  );
}

export default App;
