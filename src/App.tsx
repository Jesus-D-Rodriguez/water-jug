import React, { useState } from 'react';
import { solveWaterJug } from '../src/utils/WaterJugResolver';

type Step = {
  jugX: number;
  jugY: number;
  action: string;
};

const App: React.FC = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  const [steps, setSteps] = useState<Step[] | null>(null);

  const handleSolve = () => {
    const solution = solveWaterJug(x, y, z);
    setSteps(solution);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Water Jug Challenge</h1>
      <div>
        <label>Jug X Capacity:</label>
        <input type="number" value={x} onChange={(e) => setX(Number(e.target.value))} />
      </div>
      <div>
        <label>Jug Y Capacity:</label>
        <input type="number" value={y} onChange={(e) => setY(Number(e.target.value))} />
      </div>
      <div>
        <label>Target Amount Z:</label>
        <input type="number" value={z} onChange={(e) => setZ(Number(e.target.value))} />
      </div>
      <button onClick={handleSolve}>Solve</button>
      
      <div style={{ marginTop: "20px" }}>
        {steps === null ? (
          <p>No Solution</p>
        ) : (
          steps.map((step, index) => (
            <div key={index}>
              <p>
                Step {index + 1}: {step.action} - Jug X: {step.jugX} | Jug Y: {step.jugY}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;