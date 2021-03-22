import React from 'react'
import Result from './Result'
import PropTypes from 'prop-types'

function Results ({ results, openPopup}){
    return(
        <section className='results'>
            {results.map(result => (
                <Result key={result.id} result={result} openPopup={openPopup}/>
            ))}
        </section >
    )
}

Results.propTypes = {
    results: PropTypes.array.isRequired,
    openPopup: PropTypes.func.isRequired
}

export default Results