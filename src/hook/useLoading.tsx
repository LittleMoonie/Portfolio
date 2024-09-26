import { useState, useEffect } from 'react';

// Custom hook to manage loading state based on a boolean
export const useLoading = (isLoading: boolean) => {
  const [loading, setLoading] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
     setLoading(true);
    } else {
      // If loading is false, update the state immediately
      setLoading(false);
    }
  }, [isLoading]);

  return loading;
};
