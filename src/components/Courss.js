import React from 'react'


function Courss(p) {
  return (
    <div >
        <img src={p.img}></img>
        <div className='c'></div>
        <p>course : {p.text?p.text:"sold out"}</p>
    
    </div>
  )
}

export default Courss