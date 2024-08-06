import React  from "react";
import { Link } from "react-router-dom";


function HomeKitchen() {



    return (
        <>

            <div className="container-fluid">

                <div className="container-fluid p-0">
                    <div className="row mt-3">
                        <div className="col-sm-3">
                            <div className="card p-4" style={{ width: '15 rem' }}>
                                <Link to="/lunchbox">
                                    <img className="card-img-top catimg" src="/images/Lunch Boxess/Glass Lunch Boxes - Buy Glass Tiffins.jpeg" alt="Badges" height='390px' />
                                </Link>
                                <hr />
                                <div className="card-title">
                                    <Link to='/lunchbox'><h4 className="text-center categorybag">Lunch Boxes</h4></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card p-4" style={{ width: '15 rem' }}>
                                <Link to="/photoframe">
                                    <img className="card-img-top catimg" src="/images/Photo Frame/Premium Frame Mockup Industrial Style - Free Download.jpeg" alt="Badges" height='390px' />
                                </Link>
                                <hr />
                                <div className="card-title">
                                    <Link to='/photoframe'><h4 className="text-center categorybag">Photo Print</h4></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card p-4" style={{ width: '15 rem' }}>
                                <Link to="/cushion_covers">
                                    <img className="card-img-top catimg" src="/images/cushion/cushion cover.jpg" alt="Bags" height='390px' />
                                </Link>
                                <hr />
                                <div className="card-title">
                                    <Link to='/cushion_covers'><h4 className="text-center categorybag">Cushion Covers</h4></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card p-4" style={{ width: '15 rem' }}>
                                <Link to="/cushion">
                                    <img className="card-img-top catimg" src="/images/cushion/cushion cover2.jpeg" alt="Bags" height='390px' />
                                </Link>
                                <hr />
                                <div className="card-title">
                                    <Link to='/cushion'><h4 className="text-center categorybag">Cushions</h4></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">

                <div className="container-fluid p-0">
                    <div className="row mt-3">
                        <div className="col-sm-3">
                            <div className="card p-4" style={{ width: '15 rem' }}>
                                <Link to="/Calender">
                                    <img className="card-img-top catimg" src="/images/Printing/calenders/Calendar.jpeg" alt="Awards" height='390px' />
                                </Link>
                                <hr />
                                <div className="card-title">
                                    <Link to='/Calender'><h4 className="text-center categorybag">Calenders</h4></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card p-4" style={{ width: '15 rem' }}>
                                <Link to="/magphotoframe">
                                    <img className="card-img-top catimg" src="/images/Photo Frame/magnetic photo frame/Wrought Studio Table magnétique 8,5 x 11 po.jpeg" alt="Badges" height='390px' />
                                </Link>
                                <hr />
                                <div className="card-title">
                                    <Link to='/magphotoframe'><h4 className="text-center categorybag">Magnetic Photo Frames</h4></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card p-4" style={{ width: '15 rem' }}>
                                <Link to="/acryphotoprint">
                                    <img className="card-img-top catimg" src="/images/Photo Frame/Acrylic Photo/download (15).jpeg" alt="Bags" height='390px' />
                                </Link>
                                <hr />
                                <div className="card-title">
                                    <Link to='/acryphotoprint'><h4 className="text-center categorybag">Acrylic Photo Print</h4></Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeKitchen;