const AssignmentCard = ({ assignment, onAttempt }) => {
  const { id, title, description, topic, difficulty } = assignment;

  return (
    <div className="assignment-card">
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="tags">
        <span className="tag topic">{topic}</span>
        <span className={`tag difficulty ${difficulty.toLowerCase()}`}>
          {difficulty}
        </span>
      </div>

      <button onClick={() => onAttempt(id)}>
        Attempt
      </button>
    </div>
  );
};

export default AssignmentCard;
