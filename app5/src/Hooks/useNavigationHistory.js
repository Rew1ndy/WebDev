import { useState } from 'react';

function useNavigationHistory() {
  const [navigationHistory, setNavigationHistory] = useState([]);

  const addPage = (page) => {
    setNavigationHistory((prevHistory) => [...prevHistory, page]);
  };

  return { navigationHistory, addPage };
}

export default useNavigationHistory;
