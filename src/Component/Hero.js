import React, { useState, useEffect } from "react";
import DooZenList from "./DooZenList";
import icon from "../img/icon.png";

const Hero = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [doozens, setDoozens] = useState(() => {
        const savedDoozens = localStorage.getItem("doozens");
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
    };

    useEffect(() => {
        localStorage.setItem("doozens", JSON.stringify(doozens));
    }, [doozens]);

    return (
        <div className="container py-5">
            <div className="row gy-4">
                {/* Form Section */}
                <div className="col-12 col-md-6">
                    <form
                        className="bg-primary-subtle p-4 rounded-4 shadow h-100"
                        onSubmit={submit}
                    >
                        <div className="d-flex align-items-center mb-4 flex-wrap gap-3">
                            <img src={icon} alt="icon" height="50" />
                            <h4 className="m-0">Add your DooZen here (todos)</h4>
                        </div>
                        <div className="bg-light p-4 rounded-4 shadow">
                            <div className="mb-4">
                                <h5>DooZen Title</h5>
                                <input
                                    type="text"
                                    placeholder="Enter the title"
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                    className="form-control p-3"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <h5>DooZen Description</h5>
                                <textarea
                                    name="desc"
                                    id="desc"
                                    placeholder="Enter the description"
                                    onChange={(e) => setDesc(e.target.value)}
                                    value={desc}
                                    className="form-control p-3"
                                    rows="10"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary fs-5 p-2 w-100">
                                + Add DooZen
                            </button>
                        </div>
                    </form>
                </div>

                {/* DooZen List Section */}
                <div className="col-12 col-md-6">
                    <DooZenList
                        doozens={doozens}
                        setDoozens={setDoozens}
                        deleteAllDoozens={deleteAllDoozens}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;