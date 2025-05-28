import './App.css';
import MainRouter from './Router/MainRouter';
// In your index.js or App.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>

      <div className="container m-auto">
      <MainRouter/>
      </div>
    </>
  );
}

export default App;
