import React, { useEffect, useReducer, useContext} from "react";
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
            return { ...state, power_banks: action.payload, loading: false, error: ''  };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

function Powerbank() {

    const [{ loading, error, power_banks }, dispatch] = useReducer(reducer, {
        power_banks: [],
        loading: true,
        error: '',
    });
   

    const { state } = useContext(Store);
	const isLoggedIn = state.userInfo !== null; // Check if user is logged in
   

   
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get('/api/power_banks');
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
                            {power_banks.map((power_bank) => (
                                <div className="col-md-3 mb-3" key={power_bank.slug}>
                                    <div className="product card mt-3  cardhover">
                                        <Link to={`/power_bank/${power_bank.slug}`}>
                                            <img src={power_bank.image} className="card-img-top px-3" alt={power_bank.name} />
                                        </Link>
                                        <div className="card-body">
                                            <Link to={`/power_bank/${power_bank.slug}`}>
                                                <h3 className="card-title">{power_bank.name}</h3>
                                            </Link>
                                            <Rating rating={power_bank.rating} numReviews={power_bank.numReviews} />
											{isLoggedIn ? (
                                                <p className="card-text">
                                                    <strong><i className="bi bi-currency-rupee"></i>{power_bank.price}</strong>
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
export default Powerbank;