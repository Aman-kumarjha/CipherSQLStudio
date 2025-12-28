import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SqlEditor from "../components/SqlEditor";
import ResultTable from "../components/ResultTable";
import assignments from "../data/assignments";
import { executeQuery } from "../services/api";

const AssignmentAttempt = () => {
  const { id } = useParams();

  /* ---------------- FIND ASSIGNMENT ---------------- */
  const assignment = assignments.find(
    (a) => a.id === Number(id)
  );

  /* ---------------- STATE ---------------- */
  const [sampleTable, setSampleTable] = useState(null);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [hint, setHint] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /* ---------------- LOAD SAMPLE DATA ---------------- */
  useEffect(() => {
    if (!assignment) return;

    fetch(`http://localhost:5000/api/sample-table/${assignment.tableName}`)
      .then((res) => res.json())
      .then((data) => setSampleTable(data))
      .catch(() => setError("Failed to load sample table"));
  }, [assignment]);

  /* ---------------- EXECUTE QUERY ---------------- */
  const handleExecute = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await executeQuery(query);
      setResult(data);
    } catch {
      setError("Query execution failed");
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- GET HINT ---------------- */
  const handleHint = () => {
    setHint(assignment?.hint || "Hint not available right now.");
  };

  /* ---------------- INVALID ASSIGNMENT ---------------- */
  if (!assignment) {
    return (
      <div className="page">
        <p>Invalid assignment.</p>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container">

        {/* QUESTION PANEL */}
        <div className="question-panel">
          <h2>{assignment.title}</h2>

          <div className="question-meta">
            <span className="tag">{assignment.topic}</span>
            <span className="tag">{assignment.difficulty}</span>
          </div>

          <p>{assignment.question}</p>

          <ul>
            {assignment.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>

        {/* SAMPLE DATA */}
        {sampleTable && (
          <div className="sample-data">
            <h3>Sample Table: {assignment.tableName}</h3>
            <p>{assignment.schema}</p>

            <table border="1" cellPadding="8">
              <thead>
                <tr>
                  {sampleTable.columns.map((col) => (
                    <th key={col}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sampleTable.rows.map((row, i) => (
                  <tr key={i}>
                    {sampleTable.columns.map((col) => (
                      <td key={col}>{row[col]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* SQL EDITOR */}
        <SqlEditor value={query} onChange={setQuery} />

        <button onClick={handleExecute}>
          {loading ? "Running..." : "Execute Query"}
        </button>

        <button onClick={handleHint} style={{ marginLeft: "10px" }}>
          Get Hint
        </button>

        {hint && (
          <div className="hint-box">
            <strong>Hint:</strong> {hint}
          </div>
        )}

        {error && <p style={{ color: "red" }}>{error}</p>}

        {result && (
          <>
            <h3>Query Result</h3>
            <ResultTable data={result} />
          </>
        )}

      </div>
    </div>
  );
};

export default AssignmentAttempt;
