import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    window.electron.getSimpleObject().then((res) => {
      setData(res);
    });
     window.electron.getName().then((res) => {
      setName(res);
    });
  
  }, []);

  return (
    <>
      <h1>Simple Object{name}</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
