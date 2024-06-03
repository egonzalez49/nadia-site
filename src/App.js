import './App.css';
import Footer from './components/Footer';
import FullScreenDialog from './components/FullScreenDialog';

function App() {
  return (
    <div className="app">
      <FullScreenDialog />
      <main>
        <p>Lorem ipsum...</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
