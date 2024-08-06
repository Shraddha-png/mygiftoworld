import React from "react";
import { Link } from "react-router-dom";

function Clothing() {


    return (
        <>


            <div className="container-fluid">
               
                <div className="container-fluid p-0">
                    <div className="row mt-3">
                        <div className="col-sm-3">
                            <div className="card p-4" style={{ width: '15 rem' }}>
                                <Link to="/poloTshirts">
                                    <img className="card-img-top catimg" src="/images/T-shirts/polo t-shirts/V VALANCH Golf Polo Shirts for Men Short Sleeve Moisture Wicking Summer Casual Collared Shirts Tennis Polo.jpeg" alt="Awards" height='390px' />
                                </Link>
                                <hr />
                                <div className="card-title">
                                    <Link to='/poloTshirts'><h4 className="text-center categorybag">Polo T-Shirt</h4></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card p-4" style={{ width: '15 rem' }}>
                                <Link to="/coupleTshirts">
                                    <img className="card-img-top catimg" src="/images/T-shirts/couple t-shirts/Valentines Day Shirts  Custom Couple Shirts  Husband And Wife Matching Shirts  Matching T Shirts For Couples  His And Her Valentine Shirts  Husband And Wife Shirt.jpeg" alt="Badges" height='390px' />
                                </Link>
                                <hr />
                                <div className="card-title">
                                    <Link to='/coupleTshirts'><h4 className="text-center categorybag">Couple T-Shirt</h4></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card p-4" style={{ width: '15 rem' }}>
                                <Link to="/dryFitTshirts">
                                    <img className="card-img-top catimg" src="/images/T-shirts/Dry Fit Tshirts/Nike Ss Youth Park VI Sportshirt Kinderen - Midnight Navy_Wit - Maat 128.jpeg" alt="Bags" height='390px' />
                                </Link>
                                <hr />
                                <div className="card-title">
                                    <Link to='/dryFitTshirts'><h4 className="text-center categorybag">Dry Fit T-Shirt</h4></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card p-4" style={{ width: '15 rem' }}>
                                <Link to="/sportsTshirts">
                                    <img className="card-img-top catimg" src="/images/T-shirts/sports tshirts/Men's adidas Stripe Printing Sports Short Sleeve Black T-Shirt HM5150.jpeg" alt="Bags" height='390px' />
                                </Link>
                                <hr />
                                <div className="card-title">
                                    <Link to='/sportsTshirts'><h4 className="text-center categorybag">Sports T-Shirts</h4></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5">
               
                <div className="container-fluid p-0">
                    <div className="row mt-3">
                        <div className="col-sm-3">
                            <div className="card p-4" style={{ width: '15 rem' }}>
                                <Link to="/girlsTshirts">
                                    <img className="card-img-top catimg" src="/images/T-shirts/girls tshirts/Young Women's Tees _ Juniors Tops, Graphic Tees, Basics.jpeg" alt="Awards" height='390px' />
                                </Link>
                                <hr />
                                <div className="card-title">
                                    <Link to='/girlsTshirts'><h4 className="text-center categorybag">Girls T-Shirt</h4></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card p-4" style={{ width: '15 rem' }}>
                                <Link to="/fullSleevesTshirts">
                                    <img className="card-img-top catimg" src="/images/T-shirts/full sleave t-shirts/T-Shirt Men Cotton T Shirt Full Sleeve - White _ L.jpeg" alt="Badges" height='390px' />
                                </Link>
                                <hr />
                                <div className="card-title">
                                    <Link to='/fullSleevesTshirts'><h4 className="text-center categorybag">full Sleeves T-Shirt</h4></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card p-4" style={{ width: '15 rem' }}>
                                <Link to="/familyTshirts">
                                    <img className="card-img-top catimg" src="/images/T-shirts/family tishirts/Family Matching Love Shirt, Valentines Day Mommy Daddy Baby Tee, Mothers Day Tees, New Mama Dada Shirt, Fathers Day Outfit, Baby Shower Gift.jpeg" alt="Bags" height='390px' />
                                </Link>
                                <hr />
                                <div className="card-title">
                                    <Link to='/familyTshirts'><h4 className="text-center categorybag">Family T-Shirt</h4></Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Clothing;

