// components/Loading.jsx
import React from 'react';

const loadingStyles = {
  loading: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: 'rgba(255, 255, 255, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  spinner: {
    border: '16px solid #f3f3f3',
    borderRadius: '50%',
    borderTop: '16px solid #3498db',
    width: '120px',
    height: '120px',
    animation: 'spin 2s linear infinite',
  }
};

const Loading = () => {
  return (
    <div style={loadingStyles.loading}>
      <div style={loadingStyles.spinner}></div>
    </div>
  );
}

export default Loading;
