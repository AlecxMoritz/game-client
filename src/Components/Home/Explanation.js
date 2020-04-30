import React from 'react';
// .class = className
// styles obj = ????

const styles = {
  container: {
    backgroundColor: 'whitesmoke',
    color: 'black',
    padding: '10px 15px',
    width: '80%',
    margin: 'auto',
    borderRadius: 5,
    boxShadow: '15px 10px 5px #000'
  },
  text: {
    fontStyle: 'oblique'
  }
};

const Explanation = (props) => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>{props.text}</p>
    </div>
  )
}

export default Explanation;
