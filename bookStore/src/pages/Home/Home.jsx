import { Link } from "react-router-dom";

// import React from 'react';
function Home(){
    const sectionStyle = {
        background: 'url(/public/img/hero-banner-alt.jpg)',
      };
    const linkStyle = {
        background: 'url(/public/img/product-5.jpg)',
      };
    return(
        <>
        {/*
        <!--  Modal -->
         */}
        <div className="modal fade" id="productView" tabIndex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content overflow-hidden border-0">
            <button className="btn-close p-4 position-absolute top-0 end-0 z-index-20 shadow-0" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body p-0">
                <div className="row align-items-stretch">
                <div className="col-lg-6 p-lg-0"><a className="glightbox product-view d-block h-100 bg-cover bg-center" style={linkStyle} href="img/product-5.jpg" data-gallery="gallery1" data-glightbox="Red digital smartwatch"></a><a className="glightbox d-none" href="img/product-5-alt-1.jpg" data-gallery="gallery1" data-glightbox="Red digital smartwatch"></a><a className="glightbox d-none" href="img/product-5-alt-2.jpg" data-gallery="gallery1" data-glightbox="Red digital smartwatch"></a></div>
                <div className="col-lg-6">
                    <div className="p-4 my-md-4">
                    <ul className="list-inline mb-2">
                        <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
                        <li className="list-inline-item m-0 1"><i className="fas fa-star small text-warning"></i></li>
                        <li className="list-inline-item m-0 2"><i className="fas fa-star small text-warning"></i></li>
                        <li className="list-inline-item m-0 3"><i className="fas fa-star small text-warning"></i></li>
                        <li className="list-inline-item m-0 4"><i className="fas fa-star small text-warning"></i></li>
                    </ul>
                    <h2 className="h4">Red digital smartwatch</h2>
                    <p className="text-muted">$250</p>
                    <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.</p>
                    <div className="row align-items-stretch mb-4 gx-0">
                        <div className="col-sm-7">
                        <div className="border d-flex align-items-center justify-content-between py-1 px-3"><span className="small text-uppercase text-gray mr-4 no-select">Quantity</span>
                            <div className="quantity">
                            <button className="dec-btn p-0"><i className="fas fa-caret-left"></i></button>
                            <input className="form-control border-0 shadow-0 p-0" type="text" onChange={()=>{}} value="1"/>
                            <button className="inc-btn p-0"><i className="fas fa-caret-right"></i></button>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-5"><a className="btn btn-dark btn-sm w-100 h-100 d-flex align-items-center justify-content-center px-0" href="cart.html">Add to cart</a></div>
                    </div><a className="btn btn-link text-dark text-decoration-none p-0" href="#!"><i className="far fa-heart me-2"></i>Add to wish list</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
            {/* 
            <!-- HERO SECTION-->
            */}
            <div className="container">
                <section className="hero pb-3 bg-cover bg-center d-flex align-items-center " style={sectionStyle}>
                <div className="container py-5">
                    <div className="row px-4 px-lg-5">
                    <div className="col-lg-6">
                        <p className="text-muted small text-uppercase mb-2">New Inspiration 2020</p>
                        <h1 className="h2 text-uppercase mb-3">20% off on new season</h1><a className="btn btn-dark" href="shop.html">Browse collections</a>
                    </div>
                    </div>
                </div>
                </section>
                {/* 
                <!-- CATEGORIES SECTION-->
                */}
                <section className="pt-5">
                <header className="text-center">
                    <p className="small text-muted small text-uppercase mb-1">Carefully created collections</p>
                    <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
                </header>
                <div className="row">
                    <div className="col-md-4"><a className="category-item" href="shop.html"><img className="img-fluid" src="img/cat-img-1.jpg" alt="" /><strong className="category-item-title">Clothes</strong></a>
                    </div>
                    <div className="col-md-4"><a className="category-item mb-4" href="shop.html"><img className="img-fluid" src="img/cat-img-2.jpg" alt="" /><strong className="category-item-title">Shoes</strong></a><a className="category-item" href="shop.html"><img className="img-fluid" src="img/cat-img-3.jpg" alt="" /><strong className="category-item-title">Watches</strong></a>
                    </div>
                    <div className="col-md-4"><a className="category-item" href="shop.html"><img className="img-fluid" src="img/cat-img-4.jpg" alt="" /><strong className="category-item-title">Electronics</strong></a>
                    </div>
                </div>
                </section>
                {/* 
                <!-- TRENDING PRODUCTS-->
                */}
                <section className="py-5">
                <header>
                    <p className="small text-muted small text-uppercase mb-1">Made the hard way</p>
                    <h2 className="h5 text-uppercase mb-4">Top sản phẩm bán chạy</h2>
                </header>
                <div className="row">
                {/* 
                <!-- PRODUCT-->
                */}
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product text-center">
                        <div className="position-relative mb-3">
                        <div className="badge text-white bg-"></div><a className="d-block"  href="/chi-tiet-san-pham"><img className="img-fluid w-100" src="img/product-1.jpg" alt="..." /></a>
                        <div className="product-overlay">
                            <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Thêm vào giỏ</a></li>
                            <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                            </ul>
                        </div>
                        </div>
                        <h6> <a className="reset-anchor"  href={'/chi-tiet-san-pham'} >Kui Ye Chen’s AirPods</a></h6>
                        <p className="small text-muted">$250</p>
                    </div>
                    </div>
                    {/* 
                    <!-- PRODUCT-->
                    */}
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product text-center">
                        <div className="position-relative mb-3">
                        <div className="badge text-white bg-primary">Sale</div><a className="d-block"  to="/chi-tiet-san-pham"><img className="img-fluid w-100" src="img/product-2.jpg" alt="..." /></a>
                        <div className="product-overlay">
                            <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                            <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                            </ul>
                        </div>
                        </div>
                        <h6> <Link className="reset-anchor" to="/chi-tiet-san-pham">Air Jordan 12 gym red</Link></h6>
                        <p className="small text-muted">$300</p>
                    </div>
                    </div>
                    {/* 
                    <!-- PRODUCT-->
                    */}
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product text-center">
                        <div className="position-relative mb-3">
                        <div className="badge text-white bg-"></div><Link className="d-block"  to="/chi-tiet-san-pham"><img className="img-fluid w-100" src="img/product-3.jpg" alt="..." /></Link>
                        <div className="product-overlay">
                            <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                            <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                            </ul>
                        </div>
                        </div>
                        <h6> <Link className="reset-anchor"  to="/chi-tiet-san-pham">Cyan cotton t-shirt</Link></h6>
                        <p className="small text-muted">$25</p>
                    </div>
                    </div>
                    {/* 
                    <!-- PRODUCT-->
                    */}
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product text-center">
                        <div className="position-relative mb-3">
                        <div className="badge text-white bg-info">New</div><Link className="d-block"  to="/chi-tiet-san-pham"><img className="img-fluid w-100" src="img/product-4.jpg" alt="..."/></Link>
                        <div className="product-overlay">
                            <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                            <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                            </ul>
                        </div>
                        </div>
                        <h6> <Link className="reset-anchor"  to="/chi-tiet-san-pham">Timex Unisex Originals</Link></h6>
                        <p className="small text-muted">$351</p>
                    </div>
                    </div>
                    {/* 
                    <!-- PRODUCT-->
                    */}
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product text-center">
                        <div className="position-relative mb-3">
                        <div className="badge text-white bg-danger">Sold</div><Link className="d-block"  to="/chi-tiet-san-pham"><img className="img-fluid w-100" src="img/product-5.jpg" alt="..."/></Link>
                        <div className="product-overlay">
                            <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                            <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                            </ul>
                        </div>
                        </div>
                        <h6> <Link className="reset-anchor"  to="/chi-tiet-san-pham">Red digital smartwatch</Link></h6>
                        <p className="small text-muted">$250</p>
                    </div>
                    </div>
                    {/* 
                    <!-- PRODUCT-->
                    */}
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product text-center">
                        <div className="position-relative mb-3">
                        <div className="badge text-white bg-"></div><Link className="d-block"  to="/chi-tiet-san-pham"><img className="img-fluid w-100" src="img/product-6.jpg" alt="..."/></Link>
                        <div className="product-overlay">
                            <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                            <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                            </ul>
                        </div>
                        </div>
                        <h6> <Link className="reset-anchor"  to="/chi-tiet-san-pham">Nike air max 95</Link></h6>
                        <p className="small text-muted">$300</p>
                    </div>
                    </div>
                    {/* 
                    <!-- PRODUCT-->
                    */}
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product text-center">
                        <div className="position-relative mb-3">
                        <div className="badge text-white bg-"></div><a className="d-block"  to="/chi-tiet-san-pham"><img className="img-fluid w-100" src="img/product-7.jpg" alt="..."/></a>
                        <div className="product-overlay">
                            <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                            <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                            </ul>
                        </div>
                        </div>
                        <h6> <Link className="reset-anchor"  to="/chi-tiet-san-pham">Joemalone Women prefume</Link></h6>
                        <p className="small text-muted">$25</p>
                    </div>
                    </div>
                    {/* 
                    <!-- PRODUCT-->
                    */}
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="product text-center">
                        <div className="position-relative mb-3">
                        <div className="badge text-white bg-"></div><a className="d-block"  to="/chi-tiet-san-pham"><img className="img-fluid w-100" src="img/product-8.jpg" alt="..."/></a>
                        <div className="product-overlay">
                            <ul className="mb-0 list-inline">
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                            <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                            <li className="list-inline-item me-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                            </ul>
                        </div>
                        </div>
                        <h6> <Link className="reset-anchor"  to="/chi-tiet-san-pham">Apple Watch</Link></h6>
                        <p className="small text-muted">$351</p>
                    </div>
                    </div>
                </div>
                </section>
                {/* 
                <!-- SERVICES-->
                */}
                <section className="py-5 bg-light">
                <div className="container">
                    <div className="row text-center gy-3">
                    <div className="col-lg-4">
                        <div className="d-inline-block">
                        <div className="d-flex align-items-end">
                            <svg className="svg-icon svg-icon-big svg-icon-light">
                            {/*
                            <use xlink:href="#delivery-time-1"> </use>
                            */}
                            </svg>
                            <div className="text-start ms-3">
                            <h6 className="text-uppercase mb-1">Free shipping</h6>
                            <p className="text-sm mb-0 text-muted">Free shipping worldwide</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-inline-block">
                        <div className="d-flex align-items-end">
                            <svg className="svg-icon svg-icon-big svg-icon-light">
                            {/*
                            <use xlink:href="#helpline-24h-1"> </use>
                            */}
                            </svg>
                            <div className="text-start ms-3">
                            <h6 className="text-uppercase mb-1">24 x 7 service</h6>
                            <p className="text-sm mb-0 text-muted">Free shipping worldwide</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-inline-block">
                        <div className="d-flex align-items-end">
                            <svg className="svg-icon svg-icon-big svg-icon-light">
                            {/*
                            <use xlink:href="#label-tag-1"> </use>
                            */}
                            </svg>
                            <div className="text-start ms-3">
                            <h6 className="text-uppercase mb-1">Festivaloffers</h6>
                            <p className="text-sm mb-0 text-muted">Free shipping worldwide</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/*
                <!-- NEWSLETTER-->
                */}
                <section className="py-5">
                <div className="container p-0">
                    <div className="row gy-3">
                    <div className="col-lg-6">
                        <h5 className="text-uppercase">{`Let's be friends !`}</h5>
                        <p className="text-sm text-muted mb-0">{`Nisi nisi tempor consequat laboris nisi.`}</p>
                    </div>
                    <div className="col-lg-6">
                        <form action="#">
                        <div className="input-group">
                            <input onChange={()=>{}}  className="form-control form-control-lg" type="email" placeholder="Enter your email address" aria-describedby="button-addon2"/>
                            <button className="btn btn-dark" id="button-addon2" type="submit">{`Subscribe`}</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        </>
    );
}

export default Home;