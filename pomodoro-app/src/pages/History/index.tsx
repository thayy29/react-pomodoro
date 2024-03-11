import { HistoryContainer, HistoryList } from "./style";

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>25 minutos</td>
              <td>25 minutos</td>
              <td>25 minutos</td>
              <td>25 minutos</td>
              <td>25 minutos</td>
              <td>25 minutos</td>
              <td>25 minutos</td>
            </tr>
            <tr>
              <td>Há cerca de 2 meses</td>
              <td>Há cerca de 2 meses</td>
              <td>Há cerca de 2 meses</td>
              <td>Há cerca de 2 meses</td>
              <td>Há cerca de 2 meses</td>
              <td>Há cerca de 2 meses</td>
              <td>Há cerca de 2 meses</td>
            </tr>
            <tr>
              <td>Em andamento</td>
              <td>Em andamento</td>
              <td>Em andamento</td>
              <td>Em andamento</td>
              <td>Em andamento</td>
              <td>Em andamento</td>
              <td>Em andamento</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
