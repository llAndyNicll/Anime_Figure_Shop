import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import img1 from '../img/carousel-1.jpg';

export const Navbar = () => {

    const [ locationActive, setLocationActive ] = useState( false );

    const location = useLocation();

    useEffect( () => {

        if( location.pathname === '/' ) {

            return setLocationActive( true );

        };

        setLocationActive( false );

    }, [ location ] );

  return (
    <>

        <div className="container-fluid">
            <div className="row bg-secondary py-2 px-xl-5">
                <div className="col-lg-6 d-none d-lg-block">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-dark" href="">FAQs</a>
                        <span className="text-muted px-2">|</span>
                        <a className="text-dark" href="">Help</a>
                        <span className="text-muted px-2">|</span>
                        <a className="text-dark" href="">Support</a>
                    </div>
                </div>
                <div className="col-lg-6 text-center text-lg-right">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-dark px-2" href="">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="text-dark px-2" href="">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="text-dark px-2" href="">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a className="text-dark px-2" href="">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="text-dark pl-2" href="">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row align-items-center py-3 px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <a href="" className="text-decoration-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                    </a>
                </div>
                <div className="col-lg-6 col-6 text-left">
                    <form action="">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for products" />
                            <div className="input-group-append">
                                <span className="input-group-text bg-transparent text-primary">
                                    <i className="fa fa-search"></i>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-3 col-6 text-right">
                    <a href="" className="btn border">
                        <i className="fas fa-heart text-primary"></i>
                        <span className="badge">0</span>
                    </a>
                    <a href="" className="btn border">
                        <i className="fas fa-shopping-cart text-primary"></i>
                        <span className="badge">0</span>
                    </a>
                </div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="row border-top px-xl-5">
                {
                    locationActive ? (
                        <div className="col-lg-3 d-none d-lg-block">
                            <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100 styleA" data-toggle="collapse" href="#navbar-vertical">
                                <h6 className="m-0">Categories</h6>
                                <i className="fa fa-angle-down text-dark"></i>
                            </a>
                            <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
                                <div className="navbar-nav w-100 overflow-hidden styleB">
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1"></i></a>
                                        <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                            <a href="" className="dropdown-item">Men's Dresses</a>
                                            <a href="" className="dropdown-item">Women's Dresses</a>
                                            <a href="" className="dropdown-item">Baby's Dresses</a>
                                        </div>
                                    </div>
                                    <a href="" className="nav-item nav-link">Shirts</a>
                                    <a href="" className="nav-item nav-link">Jeans</a>
                                    <a href="" className="nav-item nav-link">Swimwear</a>
                                    <a href="" className="nav-item nav-link">Sleepwear</a>
                                    <a href="" className="nav-item nav-link">Sportswear</a>
                                    <a href="" className="nav-item nav-link">Jumpsuits</a>
                                    <a href="" className="nav-item nav-link">Blazers</a>
                                    <a href="" className="nav-item nav-link">Jackets</a>
                                    <a href="" className="nav-item nav-link">Shoes</a>
                                </div>
                            </nav>
                        </div>  
                    ) : (                 
                            <div className="col-lg-3 d-none d-lg-block">
                                <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100 styleA" data-toggle="collapse" href="#navbar-vertical">
                                    <h6 className="m-0">Categories</h6>
                                    <i className="fa fa-angle-down text-dark"></i>
                                </a>
                                <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light styleG" id="navbar-vertical">
                                    <div className="navbar-nav w-100 overflow-hidden styleB">
                                        <div className="nav-item dropdown">
                                            <a href="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1"></i></a>
                                            <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                                <a href="" className="dropdown-item">Men's Dresses</a>
                                                <a href="" className="dropdown-item">Women's Dresses</a>
                                                <a href="" className="dropdown-item">Baby's Dresses</a>
                                            </div>
                                        </div>
                                        <a href="" className="nav-item nav-link">Shirts</a>
                                        <a href="" className="nav-item nav-link">Jeans</a>
                                        <a href="" className="nav-item nav-link">Swimwear</a>
                                        <a href="" className="nav-item nav-link">Sleepwear</a>
                                        <a href="" className="nav-item nav-link">Sportswear</a>
                                        <a href="" className="nav-item nav-link">Jumpsuits</a>
                                        <a href="" className="nav-item nav-link">Blazers</a>
                                        <a href="" className="nav-item nav-link">Jackets</a>
                                        <a href="" className="nav-item nav-link">Shoes</a>
                                    </div>
                                </nav>
                            </div> 
                        )
                    }
                <div className="col-lg-9">
                    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                        <a href="" className="text-decoration-none d-block d-lg-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                        </a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <NavLink to="/" className={ ({ isActive }) => "nav-item nav-link " + ( isActive ? "active" : "" ) }>Home</NavLink>
                                <NavLink to="comprar" className={ ({ isActive }) => "nav-item nav-link " + ( isActive ? "active" : "" ) }>Shop</NavLink>
                                <NavLink to="producto" className={ ({ isActive }) => "nav-item nav-link " + ( isActive ? "active" : "" ) }>Shop Detail</NavLink>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <NavLink to="carrito" className={ ({ isActive }) => "dropdown-item " + ( isActive ? "active" : "" ) }>Shopping Cart</NavLink>
                                        <NavLink to="checkout" className={ ({ isActive }) => "dropdown-item " + ( isActive ? "active" : "" ) }>Checkout</NavLink>
                                    </div>
                                </div>
                                <NavLink to="contacto" className="nav-item nav-link">Contact</NavLink>
                            </div>
                            <div className="navbar-nav ml-auto py-0">
                                <NavLink to="login" className={ ({ isActive }) => "nav-item nav-link " + ( isActive ? "active" : "" ) }>Login</NavLink>
                                <NavLink to="register" className={ ({ isActive }) => "nav-item nav-link " + ( isActive ? "active" : "" ) }>Register</NavLink>
                            </div>
                        </div>
                    </nav>
                    {
                        locationActive ? (
                            <div id="header-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active styleB" >
                                    <img className="img-fluid" src={ img1 } alt="Image" />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3 styleC" >
                                            <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                            <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                                            <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item styleB">
                                    <img className="img-fluid" src={ img1 } alt="Image" />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3 styleC">
                                            <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                            <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                                            <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                                <div className="btn btn-dark styleD">
                                    <span className="carousel-control-prev-icon mb-n2"></span>
                                </div>
                            </a>
                            <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                                <div className="btn btn-dark styleD">
                                    <span className="carousel-control-next-icon mb-n2"></span>
                                </div>
                            </a>
                        </div>
                        ): null
                    }
                </div>
            </div>
        </div>

    </>
  );
};
