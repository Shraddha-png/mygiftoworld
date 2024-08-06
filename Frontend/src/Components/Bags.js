

import React, { useEffect, useReducer, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { Store } from "./Store";
import Rating from "./Ratings";

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true, error: '' };
        case 'FETCH_SUCCESS':
            return { ...state, bags: action.payload, loading: false, error: '' };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

function Bags() {
    const [{ loading, error, bags }, dispatch] = useReducer(reducer, {
        bags: [],
        loading: true,
        error: '',
    });
    const { state } = useContext(Store);
    const isLoggedIn = state.userInfo !== null; // Check if user is logged in




    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get('/api/bags');
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {/* ########## Add Product ########## */}
            <div className="container-fluid">
                {loading ? (
                    <LoadingBox />
                ) : error ? (
                    <MessageBox varient="danger">{error}</MessageBox>
                ) : (
                    <div className="row">
                        {bags.map((bag) => (
                            <div className="col-md-3 mb-3" key={bag.slug}>
                                <div className="product card mt-3 ">
                                    <Link to={`/bag/${bag.slug}`} className="txtdco">
                                        <img src={bag.image} className="card-img-top catimg px-5 cardhover" alt={bag.name} />
                                    </Link>
                                    <div className="card-body">
                                        <Link to={`/bag/${bag.slug}`}>
                                            <h4 className="card-title">{bag.name}</h4>
                                        </Link>
                                        <Rating rating={bag.rating} numReviews={bag.numReviews} />
                                        {isLoggedIn ? (
                                            <h4 className="card-text">
                                                <strong><i className="bi bi-currency-rupee"></i>{bag.price}</strong>
                                            </h4>
                                        ) : (
                                            <h4 className="card-text">Login/Register to see Price</h4>
                                        )}

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </>
    );
}

export default Bags;
