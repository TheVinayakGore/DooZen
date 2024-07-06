import React from 'react'

const DooZen = ({title, desc, index, removeDoozen}) => {


    return (
        <>
            <div className="card mb-4 shadow">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <button type="button" className="btn btn-success px-5 shadow" onClick={() => removeDoozen(index)}>Done</button>
                </div>
            </div>
        </>
    )
}

export default DooZen;


