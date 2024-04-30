import React, { useEffect } from 'react';

const FitnessBenefits = ({ heading, points }) => {

  useEffect(() => {
    console.log(heading)
    console.log(points)
  })

  const handleRefresh = () => {
    window.history.back(); // Navigate back to the previous page
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{heading}</h2>
      <ul style={styles.list}>
        {points.map((point, index) => (
          <li key={index} style={styles.listItem}>{point}</li>
        ))}
      </ul>
      <button style={styles.refreshButton} onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f8f8f8',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: 'blue',
    fontSize: '24px',
    marginBottom: '10px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  },
  listItem: {
    marginBottom: '5px',
  },
  refreshButton: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default FitnessBenefits;
