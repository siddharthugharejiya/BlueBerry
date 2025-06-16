import './App.css';
import MainRouter from './Router/MainRouter';
// In your index.js or App.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>

      <div className="container m-auto">
        <ToastContainer position="top-right" autoClose={3000} />
        <MainRouter />
      </div>
    </>
  );
}

export default App;
