
export default function Filter(props) {
  return (
    <div className={'filters'}>
      <div>
        <h3 className={'h3'}>Data Início</h3>
        <input
          type="datetime-local"
          value={props.inicio}
          onInput={props.onInicioChange}
        ></input>
      </div>
      <div>
        <h3 className={'h3'}>Data Fim</h3>
        <input
          type="datetime-local"
          value={props.fim}
          onInput={props.onFimChange}
        ></input>
      </div>
      <div>
        <h3 className={'h3'}>Nome Operador</h3>
        <input
          type="text"
          value={props.operador}
          onInput={props.onOperadorChange}
        ></input>
      </div>
    </div>
  );
}
