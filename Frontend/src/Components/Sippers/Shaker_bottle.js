

import React, { useEffect, useReducer, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Rating from "../Ratings";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import { Store } from "../Store";

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true, error: ''  };
        case 'FETCH_SUCCESS':
            return { ...state, shakerbottles: action.payload, loading: false, error: ''  };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

function Shaker() {

    const [{ loading, error, shakerbottles }, dispatch] = useReducer(reducer, {
        shakerbottles: [],
        loading: true,
        error: '',
    });
   

    const { state} = useContext(Store);
	const isLoggedIn = state.userInfo !== null; // Check if user is logged in
    
    

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get('/api/shakerbottles');
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
        };
        fetchData();
    }, []);
    

    return(
        <>

         {/* ##########add product########## */}

        
         <div>
                
                <div className="container-fluid">
                    {loading ? (
                        <LoadingBox />
                    ) : error ? (
                        <MessageBox varient="danger">{error}</MessageBox>
                    ) : (
                        <div className="row">
                            {shakerbottles.map((shakerbottle) => (
                                <div className="col-md-3 mb-3" key={shakerbottle.slug}>
                                    <div className="product card mt-3 cardhover">
                                        <Link to={`/shakerbottle/${shakerbottle.slug}`}>
                                            <img src={shakerbottle.image} className="card-img-top shakimg" alt={shakerbottle.name} />
                                        </Link>
                                        <div className="card-body">
                                            <Link to={`/shakerbottle/${shakerbottle.slug}`}>
                                                <p className="card-title">{shakerbottle.name}</p>
                                            </Link>
                                            <Rating rating={shakerbottle.rating} numReviews={shakerbottle.numReviews} />
                                            {isLoggedIn ? (
                                                <p className="card-text">
                                                    <strong><i className="bi bi-currency-rupee"></i>{shakerbottle.price}</strong>
                                                </p>
                                            ) : (
                                                <p className="card-text">Login/Register to see Price</p>
                                            )}
                                          
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default Shaker;