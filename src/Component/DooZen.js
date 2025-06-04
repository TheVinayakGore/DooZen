import React from 'react';

const DooZen = ({ title, desc, index, removeDoozen }) => {
    return (
        <div className="card mb-4 shadow w-100">
            <div className="card-body">
                <h5 className="card-title word-break-break-word">{title}</h5>
                <p className="card-text word-break-break-word">{desc}</p>
                <button
                    type="button"
                    className="btn btn-success w-100 mt-3"
                    onClick={() => removeDoozen(index)}
                >
                    Done
                </button>
            </div>
        </div>
    );
};

export default DooZen;