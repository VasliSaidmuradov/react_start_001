import React from 'react'
import './modal.css'

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })} style={{ marginBottom: '1rem' }}>Открыть</button>

        {this.state.isOpen && (
          <div className='modal'>
            <div className='modal-body'>
              <h1>Модалка</h1>
              <p>Привет, я модальное окно!!!</p>
              <button onClick={() => this.setState({ isOpen: false })}>Закрыть</button>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}