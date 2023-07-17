
export default function Button(props) {
  function url() {
    let url = 'http://localhost:8080/transferencias/';
    if (props.inicio && props.fim && props.operador) {
      url += `filtro/${props.operador}/${props.inicio}/${props.fim}`;
    } else if (props.operador) {
      url += `nome/${props.operador}`;
    } else if (props.inicio && props.fim) {
      url += `period/${props.inicio}/${props.fim}`;
    } else {
      url = 'http://localhost:8080/transferencias/';
    }
    return props.onUrlChange(url);
  }

  return (
    <>
      <button className={'btn'} onClick={url}>
        Pesquisar
      </button>
    </>
  );
}
