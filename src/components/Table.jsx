import { useState, useEffect } from 'react';

export default function Table(props) {
  const [total, setTotal] = useState(0);
  const [totalPeriod, setTotalPeriod] = useState(0);
  const [rows, setRows] = useState([]);
  const [view, setView] = useState([]);
  const [actualPage, setActualPage] = useState(1);

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((json) => setRows(json));
  }, [props.url]);

  useEffect(() => {
    setView(
      rows.length > 0 ? rows.slice((actualPage - 1) * 5, actualPage * 5) : []
    );
  }, [rows, actualPage]);

  useEffect(() => {
    setTotalPeriod(
      view.map((data) => data.valor).reduce((prev, curr) => prev + curr, 0)
    );

    setTotal(
      rows.map((data) => data.valor).reduce((prev, curr) => prev + curr, 0)
    );
  }, [view, rows]);

  function firstPage() {
    setActualPage(1);
  }

  function lastPage() {
    setActualPage(rows.length / 5);
  }

  function nextPage() {
    actualPage < rows.length / 5
      ? setActualPage(actualPage + 1)
      : setActualPage(rows.length / 5);
  }

  function previousPage() {
    actualPage > 1 ? setActualPage(actualPage - 1) : setActualPage(1);
  }

  function changePage(number) {
    setActualPage(number);
  }

  const [buttons, setButtons] = useState([1, 2, 3]);

  useEffect(() => {
    if (actualPage <= 1) {
      setButtons([1, 2, 3]);
    } else if (actualPage >= 20) {
      setButtons([18, 19, 20]);
    } else {
      setButtons([actualPage - 1, actualPage, actualPage + 1]);
    }
  }, [buttons, actualPage]);

  return (
    <>
      <table className={'table'}>
        <thead>
          <tr>
            <td colSpan="4" className={'tableHead1'}>
              &emsp;{`Saldo Total: R$ ${total} `}&emsp;&emsp;
              {` Saldo no Período: R$ ${totalPeriod}`}
            </td>
          </tr>
          <tr>
            <th>Data</th>
            <th>Valor</th>
            <th>Tipo</th>
            <th>Operador</th>
          </tr>
        </thead>
        <tbody>
          {view.map((d, i) => (
            <tr key={i}>
              <td>{d.data}</td>
              <td>{d.valor}</td>
              <td>{d.tipo}</td>
              <td>{d.nomeOperador}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">
              <button onClick={firstPage}>&laquo;</button>
              <button onClick={previousPage}>{'<'}</button>
              <button
                onClick={() => {
                  changePage(buttons[0]);
                }}
              >
                {`${buttons[0]}`}
              </button>
              <button
                onClick={() => {
                  changePage(buttons[1]);
                }}
              >
                {`${buttons[1]}`}
              </button>
              <button
                onClick={() => {
                  changePage(buttons[2]);
                }}
              >
                {`${buttons[2]}`}
              </button>
              <button onClick={nextPage}>{'>'}</button>
              <button onClick={lastPage}>&raquo;</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
