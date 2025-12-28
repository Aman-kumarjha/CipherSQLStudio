import { useNavigate } from "react-router-dom";
import assignments from "../data/assignments";

const AssignmentList = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="container">
        <h1>SQL Assignments</h1>

        <p className="subtitle">
          Practice SQL queries on real sample data
        </p>

        <div className="assignment-list">
          {assignments.map((a) => (
            <div key={a.id} className="assignment-card">
              <h3>{a.title}</h3>

              <p className="assignment-desc">
                {a.question}
              </p>

              <div className="assignment-meta">
                <span className="tag">{a.topic}</span>
                <span
                  className={`difficulty ${a.difficulty.toLowerCase()}`}
                >
                  {a.difficulty}
                </span>
              </div>

              <button
                className="attempt-btn"
                onClick={() => navigate(`/assignment/${a.id}`)}
              >
                Attempt
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssignmentList;
