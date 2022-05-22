import React  from 'react'
import '../spinner/Spinner'

const Spinner = () => {

    return (
        <>
        {
            <div className='d-flex justify-content-center'>
                <div className='spinner-style' role='status' ></div>
            </div>
        }
        </>
    )
}

export default Spinner