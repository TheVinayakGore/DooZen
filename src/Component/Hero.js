import React, { useState, useEffect } from 'react'
import DooZenList from './DooZenList'
import icon from "../img/icon.png"

const Hero = () => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [doozens, setDoozens] = useState(() => {
        const savedDoozens = localStorage.getItem('doozens');
        return savedDoozens ? JSON.parse(savedDoozens) : [];
    });

    const submit = (e) => {
        e.preventDefault();
        if (title.trim() && desc.trim()) {
            setDoozens([...doozens, { title, desc }]);
            setTitle("");
            setDesc("");
        }
    };

    const deleteAllDoozens = () => {
        setDoozens([]);
    }

    useEffect(() => {
        localStorage.setItem('doozens', JSON.stringify(doozens));
    }, [doozens])


    return (
        <>
            <div className="p-5 gap-5 d-flex">
                <form className="container d-flex-column bg-primary-subtle p-5 rounded-4 shadow" onSubmit={submit}>
                    <div className="d-flex align-items-center">
                        <img src={icon} alt="icon" height="60" />
                        <h2 className='m-0 ms-2'>Add your DooZen here (todos)</h2>
                    </div>
                    <div className="container d-flex-column bg-light my-5 p-5 rounded-4 shadow">
                        <div className="d-flex flex-column">
                            <h4>DooZen Title</h4>
                            <input type="text" placeholder="enter the title" onChange={(e) => setTitle(e.target.value)} value={title} className='p-2 my-2 rounded border border-secondary w-100' required />
                        </div>
                        <div className="d-flex-column my-4">
                            <h4>DooZen Description</h4>
                            <textarea name="desc" id="desc" placeholder="enter the description" onChange={(e) => setDesc(e.target.value)} value={desc} className='p-2 my-2 rounded border border-secondary w-100' required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary shadow">+ Add DooZen</button>
                    </div>
                </form>
                <DooZenList doozens={doozens} setDoozens={setDoozens} deleteAllDoozens={deleteAllDoozens} />
            </div>
        </>
    )
}

export default Hero;

