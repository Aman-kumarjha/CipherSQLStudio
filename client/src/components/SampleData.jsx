const SampleData = ({ tableName, schema, data }) => {
  if (!data) return null;

  return (
    <div className="sample-data">
      <h3>Sample Table: {tableName}</h3>

      {/* ---------- TABLE SCHEMA ---------- */}
      <div className="schema-box">
        <code>{schema}</code>
      </div>

      {/* ---------- TABLE DATA ---------- */}
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {data.columns.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.rows.map((row, index) => (
              <tr key={index}>
                {data.columns.map((col) => (
                  <td key={col}>{row[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SampleData;
