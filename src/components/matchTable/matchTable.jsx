import './matchTable.scss';

function MatchTable({ data = [], header }) {
      return (
        <>
          {data.length ? (
            <table>
              <thead>
                <tr>
                  <th scope="col">{header}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((interestedMatch) => (
                  <tr>
                    <td data-label={header}>{interestedMatch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </>
      );
}

export default MatchTable;
