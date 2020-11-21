import React from 'react'

const styles = {
  loader: {
    display: 'flex',
    justifyContent: 'center',
    margin: '.5rem',
  }
}

const Loader = () => <div style={styles.loader}><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>

export default Loader