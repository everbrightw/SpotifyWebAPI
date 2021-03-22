import React from 'react'

function Popup({selected, closePopup}){
    return (
        <section className='popup'>
            <div className='content'>
                <h2>{ selected.name } <span>({ selected.artists[0].name })</span></h2>
                <p className="rating">Release Date: {selected.release_date} </p>
                <div className="plot">
                    <img src={selected.images[0].url} />
                    <p>
                        {selected.name}
                    </p>
                </div> 
                <button className="close" onClick={closePopup}>Close</button>
            </div>

        </section>
    )
}

export default Popup