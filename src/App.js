import './App.css';
import Header from './components/Header-Part/Header';
import SwipButton from './components/TinderCards-part/SwipButton-part/SwipButton';
import TinderCards from './components/TinderCards-part/TinderCards';


function App() {
  return (
    <div className="app">
  

     {/* Header */}
     <Header />
     {/* TinderCard */}
     <TinderCards />
     <SwipButton />
     {/* Footer */}
    </div>
  );
}

export default App;
