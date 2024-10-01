import React from 'react';

function DebugWindow({ history }) {
  return (
    <div className="debug-window">
      <h4>Navigation History:</h4>
      <ul>
        {history.map((page, index) => (
          <li key={index}>{page}</li>
        ))}
      </ul>
    </div>
  );
}

export default DebugWindow;
