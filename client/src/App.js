import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import SignUpProfile from "./components/SignUp"
import LoginPage from './components/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">  
      <Router>
        <Routes>
        <Route path="/" element={<SignUpProfile/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
