import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    marginBottom: '.5rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  input: {
    marginRight: '1rem',
    cursor: 'pointer',
  },
  button: {
    backgroundColor: '#FF6347',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
}

const TodoItem = ({ todo, index, onChange }) => {
  const { removeTodo } = useContext(Context)
  const classes = []

  if (todo.completed) {
    classes.push('done')
  }
  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input type="checkbox" checked={todo.completed} style={styles.input} onChange={() => onChange(todo.id)} />
        {index + 1} - {todo.title}
      </span>
      <button style={styles.button} onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  )
}

TodoItem.validation = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

export default TodoItem;