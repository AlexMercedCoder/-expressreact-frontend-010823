import logo from './logo.svg';
import './App.css';
import { useLoaderData } from 'react-router-dom';

function App() {

  const data = useLoaderData()

  return (
    <div className="App">
      {data.name}
    </div>
  );
}

export default App;
