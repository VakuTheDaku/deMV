import { useState } from "react";

export default function Add({ getContract }) {
    const [state, setState]= useState()
    function handleChange(evt) {

        const value = evt.target.value;

        setState({
            ...state,
            [evt.target.name]: value
        });
    }
    async function createRecord() {
        console.log(state)
        await getContract(window).createRecord(String(state.org), state.patient, state.medicine, parseInt(state.count))

    }
    return (
        <>
            <div className="min-h-screen">
                <div className=" p-10">
                    <div className="shadow-lg rounded-md bg-black bg-opacity-25 pt-10 border border-5 border-white rounded-md p-10">
                        <div className="grid place-items-center ">
                            <div className=" text-white px-5 py-3 mb-3 glass rounded-md border-b-4">
                                RECORD
                            </div>
                        </div>
                        <div className="grid place-items-center gap-3 mt-2">
                           
                            <label className="input-group ">
                                <span className="label border text-xsm w-1/3">org Pub Key</span>
                                <input required type={"text"} className="bg-black bg-opacity-25 input w-full text-white" name="org" onChange={handleChange} />
                            </label>
                            <label className="input-group ">
                                <span className="label border text-xsm w-1/3">Patient pub key</span>
                                <input required type={"text"} className="bg-black bg-opacity-25 input w-full text-white" name="patient" onChange={handleChange} />
                            </label>
                            <label className="input-group ">
                                <span className="label border text-xsm w-1/3">medicine name</span>
                                <input required type={"text"} className="bg-black bg-opacity-25 input w-full text-white" name="medicine" onChange={handleChange} />
                            </label>
                            <label className="input-group ">
                                <span className="label border text-xsm w-1/3">count</span>
                                <input required type={"number"} className="bg-black bg-opacity-25 input w-full text-white" name="count" onChange={handleChange} />
                            </label>
                            <div className="flex items-center justify-center mt-4">
                                <button className="btn glass text-white font-uppercase" onClick={()=> createRecord()}>
                                    Add Record
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}