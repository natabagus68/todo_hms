/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/card/Card';

function App() {
  const [user, setUser] = useState('');
  const getUser = async () => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUser(data.data);
  };
  useEffect(() => {
    getUser();
  }, []);

  if (user !== '') {
    return (
      <div className="App">
        <Card user={user} />
      </div>
    );
  }
  return false;
}

export default App;
