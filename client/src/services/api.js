export const executeQuery = async (query) => {
  const res = await fetch("http://localhost:5000/api/execute", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    throw new Error("Query failed");
  }

  return res.json();
};

export const getHint = async (assignmentId) => {
  const res = await fetch("http://localhost:5000/api/hint", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ assignmentId }),
  });

  if (!res.ok) {
    throw new Error("Failed to get hint");
  }

  return res.json();
};
