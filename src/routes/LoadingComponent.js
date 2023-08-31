import React, { useState, useEffect } from 'react';
import Loading from 'react-loading';

export default function LoadingComponent({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); // delay 1 second

    return () => clearTimeout(timer); // clean up timer
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Loading type={'spin'} color={'#000'} />
      </div>
    );
  }

  return children;
}