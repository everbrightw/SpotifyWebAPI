import React from 'react'
import Cell from './Cell'


function List ({ list, openPopup}){
    
    return(
        <section className='list'>
            {list.map(cell => (
                <Cell key={cell.id} cell={cell} openPopup={openPopup}/>
            ))}
        </section >
    )
}

export default List