import React from 'react'
import DooZen from './DooZen'
import bin from '../img/bin.svg'

const DooZenList = ({ doozens, setDoozens, deleteAllDoozens }) => {

    const removeDoozen = (indexToRemove) => {
        setDoozens(doozens.filter((_, index) => index !== indexToRemove));
    }

    return (
        <>
            <div className="container rounded-4 shadow">
                <div className="d-flex align-items-center justify-content-between bg-body px-2 border-bottom border-secondary z-3 w-full" style={{ position: 'absolute', width: '42%' }}>
                    <h3 className="m-0 py-4">DooZen List</h3>
                    <div className="d-flex align-itmes-center justify-content-center">
                        <p className='m-0 p-0 fs-5 d-flex align-items-center'>Clear all</p>
                        <button className='btn' onClick={deleteAllDoozens}><img src={bin} alt="bin" width="20" /></button>
                    </div>
                </div>
                <div className="d-flex-column mx-0 p-5 pb-3 relative z-0 overflow-auto" style={{ height: '555px', marginTop: '5rem' }}>
                    {doozens.length === 0 ? ( <p className="text-center text-secondary opacity-50">No doozens remaing !</p> ) : ( doozens.map((doozen, index) => (
                            <DooZen key={index} index={index} title={doozen.title} desc={doozen.desc} removeDoozen={removeDoozen} />
                        ))
                    )}
                </div>
            </div>
        </>
    )
}

export default DooZenList;
