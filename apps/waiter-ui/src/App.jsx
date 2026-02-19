import { useEffect, useState } from "react";
import { getHealth } from "./api";

export default function App() {
  const [health, setHealth] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    getHealth()
      .then(setHealth)
      .catch((e) => setErr(e.message));
  }, []);

  return (
    <div style={{ padding: 24, fontFamily: "system-ui, Arial" }}>
      <h1>Waiter UI</h1>

      {err && <p style={{ color: "crimson" }}>Error: {err}</p>}

      {health ? (
        <pre style={{ background: "#f5f5f5", padding: 12, borderRadius: 8 }}>
          {JSON.stringify(health, null, 2)}
        </pre>
      ) : (
        !err && <p>Loading health…</p>
      )}
    </div>
  );
}
