import HeartRain from './components/HeartRain/HeartRain';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Heart Rain App</h1>
      </header>
      <main className="app-main">
        <HeartRain />
      </main>
      <footer className="app-footer">
        <p>Click the button to see hearts rain!</p>
      </footer>
    </div>
  );
}

export default App;