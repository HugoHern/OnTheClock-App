import React from 'react'

function Modal({closeModal}) {
  return (
    <>
    <div>
        <button onClick={() => {closeModal(false)}}> X </button>
    </div>
    <div>
        <form>
            <input placeholder='Enter Day' />
            <input placeholder='Enter Hours'/>
            <button onClick={console.log('submitted')}>Submit</button>
        </form>
    </div>
    </>
  )
}

export default Modal