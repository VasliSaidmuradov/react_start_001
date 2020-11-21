import React, { useState } from 'react'
import PropTypes from 'prop-types'

const styles = {
  form: {
    marginBottom: '1rem',
  },
  input: {
    padding: '0 .5rem',
    marginRight: '1rem',
    height: '25px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    backgroundColor: '#5bb92b',
    color: '#fff',
    border: '1px solid #5bb92b',
    borderRadius: '4px',
    height: '25px',
    cursor: 'pointer',
  }
}

const AddTodo = ({ onCreate }) => {
  const [value, setValue] = useState('')

  function submitHandler(event) {
    event.preventDefault()

    if (value.trim()) {
      onCreate(value)
      setValue('')
    }
  }

  return (
    <form onSubmit={submitHandler} style={styles.form}>
      <input value={value} onChange={(event) => setValue(event.target.value)} style={styles.input} type="text" />
      <button style={styles.button} type="submit">Добавтиь задачу</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo