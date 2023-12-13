import React from 'react'

function Todolist( {todolist} ) {
  return (
    <div>
      {todolist.map((todos,index) => {
        <div key={index}>
            <li>{todos}</li>
        </div>
      })}
    </div>
  )
}

export default Todolist;
