import React from 'react'

function Todolist( {todolist,deleteHandler} ) {
  return (
    <div>
      {todolist.map((todo,index) => 
        <div key={index}>
            <div className='list'>
                <li>{todo}</li> 
                <button onClick={() => deleteHandler(index)}>Delete</button>
            </div>
        </div>
      )}
    </div>
  )
}

export default Todolist;
