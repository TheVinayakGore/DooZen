import React from 'react';
import DooZen from './DooZen';

const DooZenList = ({ doozens, setDoozens, deleteAllDoozens }) => {
    const removeDoozen = (indexToRemove) => {
        setDoozens(doozens.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="card mb-4 shadow rounded-4 h-100">
            {/* Responsive Header */}
            <div className="d-flex flex-wrap align-items-center justify-content-between bg-body px-3 py-3 border-bottom border-secondary rounded-top-4">
                <h4 className="m-0">📋 DooZen List</h4>
                <div className="d-flex align-items-center gap-2">
                    <button className="btn btn-outline-danger d-flex align-items-center gap-3 px-3 py-1 shadow-sm" onClick={deleteAllDoozens}>
                        <span className="fw-semibold">Clear All</span>
                        <span className="fs-5" role="img" aria-label="trash">🗑️</span>
                    </button>
                </div>
            </div>

            {/* Scrollable List */}
            <div
                className="p-4 overflow-auto"
                style={{ maxHeight: '500px' }}
            >
                {doozens.length === 0 ? (
                    <p className="text-center text-secondary opacity-75">
                        No DooZens remaining!
                    </p>
                ) : (
                    doozens.map((doozen, index) => (
                        <DooZen
                            key={index}
                            index={index}
                            title={doozen.title}
                            desc={doozen.desc}
                            removeDoozen={removeDoozen}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default DooZenList;