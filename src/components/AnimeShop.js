import React from 'react';
import img2 from '../img/cat-1.jpg';
import img3 from '../img/offer-2.png';
import img4 from '../img/product-1.jpg';
import img5 from '../img/vendor-1.jpg';
import img50 from '../img/vendor-2.jpg';
import img51 from '../img/vendor-3.jpg';
import img52 from '../img/vendor-4.jpg';
import img53 from '../img/vendor-5.jpg';
import img54 from '../img/vendor-6.jpg';
import img55 from '../img/vendor-7.jpg';
import img56 from '../img/vendor-8.jpg';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const AnimeShop = () => {

    const abrigos = useSelector( state => state.productos );

  return (
    <>

        <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center border mb-4 styleE">
                    <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
                    <h5 className="font-weight-semi-bold m-0">100% Calidad</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center border mb-4 styleE">
                    <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
                    <h5 className="font-weight-semi-bold m-0">Envío Gratis</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center border mb-4 styleE">
                    <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
                    <h5 className="font-weight-semi-bold m-0">Retorno Gratis</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center border mb-4 styleE">
                    <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
                    <h5 className="font-weight-semi-bold m-0">Atencion 24/7</h5>
                </div>
            </div>
        </div>
        </div>

        <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
            <div className="col-lg-4 col-md-6 pb-1">
                <div className="cat-item d-flex flex-column border mb-4 styleE">
                    <p className="text-right">{ abrigos.length } Productos</p>
                    <a href="" className="cat-img position-relative overflow-hidden mb-3">
                        <img className="img-fluid" src={ `https://http2.mlstatic.com/D_NQ_NP_${ abrigos[0].thumbnail_id }-O.webp` } alt="" />
                    </a>
                    <h5 className="font-weight-semi-bold m-0">Abrigos</h5>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
                <div className="cat-item d-flex flex-column border mb-4 styleE">
                    <p className="text-right">15 Products</p>
                    <a href="" className="cat-img position-relative overflow-hidden mb-3">
                        <img className="img-fluid" src={ img2 } alt="" />
                    </a>
                    <h5 className="font-weight-semi-bold m-0">Women's dresses</h5>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
                <div className="cat-item d-flex flex-column border mb-4 styleE">
                    <p className="text-right">15 Products</p>
                    <a href="" className="cat-img position-relative overflow-hidden mb-3">
                        <img className="img-fluid" src={ img2 } alt="" />
                    </a>
                    <h5 className="font-weight-semi-bold m-0">Baby's dresses</h5>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
                <div className="cat-item d-flex flex-column border mb-4 styleE">
                    <p className="text-right">15 Products</p>
                    <a href="" className="cat-img position-relative overflow-hidden mb-3">
                        <img className="img-fluid" src={ img2 } alt="" />
                    </a>
                    <h5 className="font-weight-semi-bold m-0">Accerssories</h5>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
                <div className="cat-item d-flex flex-column border mb-4">
                    <p className="text-right">15 Products</p>
                    <a href="" className="cat-img position-relative overflow-hidden mb-3">
                        <img className="img-fluid" src={ img2 } alt="" />
                    </a>
                    <h5 className="font-weight-semi-bold m-0">Bags</h5>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
                <div className="cat-item d-flex flex-column border mb-4">
                    <p className="text-right">15 Products</p>
                    <a href="" className="cat-img position-relative overflow-hidden mb-3">
                        <img className="img-fluid" src={ img2 } alt="" />
                    </a>
                    <h5 className="font-weight-semi-bold m-0">Shoes</h5>
                </div>
            </div>
        </div>
        </div>

        <div className="container-fluid offer pt-5">
        <div className="row px-xl-5">
            <div className="col-md-6 pb-4">
                <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                    <img src={ img3 } alt="" />
                    <div className="position-relative styleF">
                        <h5 className="text-uppercase text-primary mb-3">20% off the all order</h5>
                        <h1 className="mb-4 font-weight-semi-bold">Spring Collection</h1>
                        <a href="" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 pb-4">
                <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                    <img src={ img3 } alt="" />
                    <div className="position-relative styleF">
                        <h5 className="text-uppercase text-primary mb-3">20% off the all order</h5>
                        <h1 className="mb-4 font-weight-semi-bold">Winter Collection</h1>
                        <a href="" className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div className="container-fluid pt-5">
        <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
        </div>
        <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={ img4 } alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div className="d-flex justify-content-center">
                            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={ img4 } alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div className="d-flex justify-content-center">
                            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={ img4 } alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div className="d-flex justify-content-center">
                            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={ img4 } alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div className="d-flex justify-content-center">
                            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={ img4 } alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div className="d-flex justify-content-center">
                            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={ img4 } alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div className="d-flex justify-content-center">
                            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={ img4 } alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div className="d-flex justify-content-center">
                            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={ img4 } alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div className="d-flex justify-content-center">
                            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div className="container-fluid bg-secondary my-5">
        <div className="row justify-content-md-center py-5 px-xl-5">
            <div className="col-md-6 col-12 py-5">
                <div className="text-center mb-2 pb-2">
                    <h2 className="section-title px-5 mb-3"><span className="bg-secondary px-2">Stay Updated</span></h2>
                    <p>Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore at justo ipsum eirmod duo labore labore.</p>
                </div>
                <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control border-white p-4" placeholder="Email Goes Here" />
                        <div className="input-group-append">
                            <button className="btn btn-primary px-4">Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>

        <div className="container-fluid pt-5">
        <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Just Arrived</span></h2>
        </div>
        <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={ img4 } alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div className="d-flex justify-content-center">
                            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={ img4 } alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div className="d-flex justify-content-center">
                            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={ img4 } alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div className="d-flex justify-content-center">
                            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={ img4 } alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div className="d-flex justify-content-center">
                            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={ img4 } alt=""/>
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div className="d-flex justify-content-center">
                            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={ img4 } alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div className="d-flex justify-content-center">
                            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={ img4 } alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div className="d-flex justify-content-center">
                            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={ img4 } alt="" />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                        <div className="d-flex justify-content-center">
                            <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div className="container-fluid py-5">
        <div className="row px-xl-5">
            <div className="col">
                <div className="owl-carousel vendor-carousel">
                    <div className="vendor-item border p-4">
                        <img src={ img5 } alt="" />
                    </div>
                    <div className="vendor-item border p-4">
                        <img src={ img50 } alt="" />
                    </div>
                    <div className="vendor-item border p-4">
                        <img src={ img51 } alt="" />
                    </div>
                    <div className="vendor-item border p-4">
                        <img src={ img52 } alt="" />
                    </div>
                    <div className="vendor-item border p-4">
                        <img src={ img53 } alt="" />
                    </div>
                    <div className="vendor-item border p-4">
                        <img src={ img54 } alt="" />
                    </div>
                    <div className="vendor-item border p-4">
                        <img src={ img55 } alt="" />
                    </div>
                    <div className="vendor-item border p-4">
                        <img src={ img56 } alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>

        <Outlet />

    </>
  );
};
