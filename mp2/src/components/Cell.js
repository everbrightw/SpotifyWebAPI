import React from 'react'

function Cell ({ cell, openPopup}){
    return(
        <div className='cell' onClick={() => openPopup(cell.id)}>
            <img src = {cell.images[2].url} />
            <h3>{cell.name}</h3>
            <p>Release Date:  {cell.release_date}</p>
            
        </div >
    )
}

export default Cell;