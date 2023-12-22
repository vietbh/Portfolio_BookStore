// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";

function Product() {
    const API_URL = 'http://127.0.0.1:8000/api';
    const linkStyle = {
        background: 'url(/public/img/product-5.jpg)',
      };
    const [products,setProducts] = useState([]);

    const fetchData = async() => {
        try {
            const response = await axios.get(API_URL.concat('/books'));
            console.log(response);
            const data = await response.data;
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        const interval = setInterval(()=>{
            fetchData();
        },40000);
        clearInterval(interval);
    })

    return (
        <>
        {/*Modal */}
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
        <div className="container">
            {/*              
        <!-- HERO SECTION-->
            */}

        <section className="py-5 bg-light">
          <div className="container">
            <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0">Shop</h1>
              </div>
              <div className="col-lg-6 text-lg-end">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                    <li className="breadcrumb-item"><a className="text-dark" href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Shop</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container p-0">
            <div className="row">
                            {/*
                <!-- SHOP SIDEBAR-->
                 */}

              <div className="col-lg-3 order-2 order-lg-1">
                <h5 className="text-uppercase mb-4">Categories</h5>
                <div className="py-2 px-4 bg-dark text-white mb-3"><strong className="small text-uppercase fw-bold">Fashion &amp; Acc</strong></div>
                <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
                  <li className="mb-2"><a className="reset-anchor" href="#!">{`Women's T-Shirts`}</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#!">{`Men's T-Shirts`}</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#!">Dresses</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#!">Novelty socks</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#!">{`Women's sunglasses`}</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#!">{`Men's sunglasses`}</a></li>
                </ul>
                <div className="py-2 px-4 bg-light mb-3"><strong className="small text-uppercase fw-bold">Health &amp; Beauty</strong></div>
                <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
                  <li className="mb-2"><a className="reset-anchor" href="#!">Shavers</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#!">bags</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#!">Cosmetic</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#!">Nail Art</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#!">Skin Masks &amp; Peels</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#!">Korean cosmetics</a></li>
                </ul>
                <div className="py-2 px-4 bg-light mb-3"><strong className="small text-uppercase fw-bold">Electronics</strong></div>
                <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal mb-5">
                  <li className="mb-2"><a className="reset-anchor" href="#!">Electronics</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#!">USB Flash drives</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#!">Headphones</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#!">Portable speakers</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#!">Cell Phone bluetooth headsets</a></li>
                  <li className="mb-2"><a className="reset-anchor" href="#!">Keyboards</a></li>
                </ul>
                <h6 className="text-uppercase mb-4">Price range</h6>
                <div className="price-range pt-4 mb-5">
                  <div id="range"></div>
                  <div className="row pt-2">
                    <div className="col-6"><strong className="small fw-bold text-uppercase">From</strong></div>
                    <div className="col-6 text-end"><strong className="small fw-bold text-uppercase">To</strong></div>
                  </div>
                </div>
                <h6 className="text-uppercase mb-3">Show only</h6>
                <div className="form-check mb-1">
                  <input className="form-check-input" type="checkbox" id="checkbox_1"/>
                  <label className="form-check-label" to="checkbox_1">Returns Accepted</label>
                </div>
                <div className="form-check mb-1">
                  <input className="form-check-input" type="checkbox" id="checkbox_2"/>
                  <label className="form-check-label" to="checkbox_2">Returns Accepted</label>
                </div>
                <div className="form-check mb-1">
                  <input className="form-check-input" type="checkbox" id="checkbox_3"/>
                  <label className="form-check-label" to="checkbox_3">Completed Items</label>
                </div>
                <div className="form-check mb-1">
                  <input className="form-check-input" type="checkbox" id="checkbox_4"/>
                  <label className="form-check-label" to={"checkbox_4"}>Sold Items</label>
                </div>
                <div className="form-check mb-1">
                  <input className="form-check-input" type="checkbox" id="checkbox_5"/>
                  <label className="form-check-label" to="checkbox_5">Deals &amp; Savings</label>
                </div>
                <div className="form-check mb-4">
                  <input className="form-check-input" type="checkbox" id="checkbox_6"/>
                  <label className="form-check-label" to="checkbox_6">Authorized Seller</label>
                </div>
                <h6 className="text-uppercase mb-3">Buying format</h6>
                <div className="form-check mb-1">
                  <input className="form-check-input" type="radio" name="customRadio" id="radio_1"/>
                  <label className="form-check-label" to="radio_1">All Listings</label>
                </div>
                <div className="form-check mb-1">
                  <input className="form-check-input" type="radio" name="customRadio" id="radio_2"/>
                  <label className="form-check-label" to="radio_2">Best Offer</label>
                </div>
                <div className="form-check mb-1">
                  <input className="form-check-input" type="radio" name="customRadio" id="radio_3"/>
                  <label className="form-check-label" to="radio_3">Auction</label>
                </div>
                <div className="form-check mb-1">
                  <input className="form-check-input" type="radio" name="customRadio" id="radio_4"/>
                  <label className="form-check-label" to="radio_4">Buy It Now</label>
                </div>
              </div>
                              {/*
                <!-- SHOP LISTING-->
                 */}

              <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
                <div className="row mb-3 align-items-center">
                  <div className="col-lg-6 mb-2 mb-lg-0">
                    <p className="text-sm text-muted mb-0">Showing 1–12 of 53 results</p>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
                      <li className="list-inline-item text-muted me-3"><a className="reset-anchor p-0" href="#!"><i className="fas fa-th-large"></i></a></li>
                      <li className="list-inline-item text-muted me-3"><a className="reset-anchor p-0" href="#!"><i className="fas fa-th"></i></a></li>
                      <li className="list-inline-item">
                        <select className="selectpicker" data-customclass="form-control form-control-sm">
                          <option value>Sort By </option>
                          <option value="default">Default sorting </option>
                          <option value="popularity">Popularity </option>
                          <option value="low-high">Price: Low to High </option>
                          <option value="high-low">Price: High to Low </option>
                        </select>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                {/*
                <!-- PRODUCT-->
                 */}
                {products.map(product => {
                     <div className="col-lg-4 col-sm-6">
                       <div className="product text-center">
                         <div className="mb-3 position-relative">
                           <div className="badge text-white bg-"></div><a className="d-block" href="detail.html"><img className="img-fluid w-100" src={product.book_image} alt="..."/></a>
                           <div className="product-overlay">
                             <ul className="mb-0 list-inline">
                               <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                               <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="cart.html">Add to cart</a></li>
                               <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                             </ul>
                           </div>
                         </div>
                         <h6> <a className="reset-anchor" href="detail.html">Kui Ye Chen’s AirPods</a></h6>
                         <p className="small text-muted">$250</p>
                       </div>
                     </div>

                })}
                </div>
                {/*
                <!-- PAGINATION-->
                 */}
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center justify-content-lg-end">
                    <li className="page-item mx-1"><a className="page-link" href="#!" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                    <li className="page-item mx-1 active"><a className="page-link" href="#!">1</a></li>
                    <li className="page-item mx-1"><a className="page-link" href="#!">2</a></li>
                    <li className="page-item mx-1"><a className="page-link" href="#!">3</a></li>
                    <li className="page-item ms-1"><a className="page-link" href="#!" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
        </div>
        </>
    );
}

export default Product;