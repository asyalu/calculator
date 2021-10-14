import './App.scss';
import Display from './components/Display/Display';
import Keyboard from './components/Keyboard/Keyboard';

const App = () => (
  <main className="main">
    <div className="main__calculator">
      <Display />
      <Keyboard />
    </div>
  </main>
);

export default App;
