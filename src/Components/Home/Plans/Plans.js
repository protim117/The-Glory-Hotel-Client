import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Plan from '../Plan/Plan';

const Plans = () => {
    const [plans,setPlans]=useState([]);
    // taken a state in order to show spinner in data load 
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        setLoading(true);
        const uri="https://serene-tor-03532.herokuapp.com/plans";
        axios.get(uri)
        .then(res => {
            setPlans(res.data)
            setLoading(false)
        })    
    },[])

    return (
        <div className="container pt-4">
            <h3 className='text-start border-bottom  border-dark border-5 fs-2 mb-5'>See our Popular Plans:</h3>
            <div className="plan-container">
                {/* if loading is true then some spinner will be shown(added a lot because it seems nice) then data will be shown  */}
                {loading? <div> <Spinner animation="grow" variant="primary" />
                                <Spinner animation="grow" variant="secondary" />
                                <Spinner animation="grow" variant="success" />
                                <Spinner animation="grow" variant="danger" />
                                <Spinner animation="grow" variant="warning" />
                                <Spinner animation="grow" variant="info" />
                                <Spinner animation="grow" variant="light" />
                                <Spinner animation="grow" variant="dark" />
                            </div>
                            :
                            <div>
                                <div class="row row-cols-1 row-cols-md-3 g-4">
                                {
                                    plans.map(plan=> <Plan key={plan.key} plan={plan}></Plan>)
                                }
                                </div>
                            </div>}
            </div>
            
        </div>
    );
};

export default Plans;