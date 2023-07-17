import { useState } from 'react';
import Filter from './components/Filter.jsx';
import Button from './components/Button.jsx';
import Table from './components/Table.jsx';
import './App.css';

function App() {
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');
  const [operador, setOperador] = useState('');
  const [url, setUrl] = useState('http://localhost:8080/transferencias');

  function mySetOperador(event) {
    setOperador(event.target.value);
  }
  function mySetInicio(event) {
    setInicio(event.target.value);
  }
  function mySetFim(event) {
    setFim(event.target.value);
  }
  function mySetUrl(url) {
    setUrl(url);
    console.log(url)
  }

  return (
    <>
      <Filter
        inicio={inicio}
        fim={fim}
        operador={operador}
        onInicioChange={mySetInicio}
        onFimChange={mySetFim}
        onOperadorChange={mySetOperador}
      />
      <Button
        inicio={inicio}
        fim={fim}
        operador={operador}
        onUrlChange={mySetUrl}
      />
      <Table url={url} />
    </>
  );
}

export default App;
