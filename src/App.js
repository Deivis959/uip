import './App.css';
import logo from './logo.jpg'
import { Link} from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <img className='logoHookah' src={logo} alt="Hooka CSS"/>
      <div>
        <Link to='https://www.instagram.com/madenccs'>
          <h2 className='linkH2'>Instagram</h2>
        </Link>

        <Link to="/catalogo">
          <h2 className='linkH2'>Catalogo</h2>
        </Link>

        <Link to='https://api.whatsapp.com/message/BEMXBXWFQKBHA1?autoload=1&app_absent=0'>
          <h2 className='linkH2'>WhatsApp</h2>
        </Link>
      </div>

    </main>
  );
}

export default App;
