import './singleColumnTable.scss';

function SingleColumnTable({ data = [], header }) {
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
                {data.map((elem, index) => (
                  <tr key={index}>
                    <td data-label={header}>{elem}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </>
      );
}

export default SingleColumnTable;
