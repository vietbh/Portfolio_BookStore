
const DetailBlog = () => {
    return (
        <>
        <section>
            <nav className="breadcrumb">
                
            </nav>
        </section>
        <section className="py-5">
        <div className="container" >
        <div className="row mb-5">
            <div className="col-lg-6">
            {/* <!-- PRODUCT SLIDER--> */}
            <div className="row m-sm-0">
                <div className="col-sm-2 p-sm-0 order-2 order-sm-1 mt-2 mt-sm-0 px-xl-2">
                <div className="swiper product-slider-thumbs">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide h-auto swiper-thumb-item mb-3"><img className="w-100" src="img/product-detail-1.jpg" alt="..." /></div>
                    <div className="swiper-slide h-auto swiper-thumb-item mb-3"><img className="w-100" src="img/product-detail-2.jpg" alt="..." /></div>
                    <div className="swiper-slide h-auto swiper-thumb-item mb-3"><img className="w-100" src="img/product-detail-3.jpg" alt="..." /></div>
                    <div className="swiper-slide h-auto swiper-thumb-item mb-3"><img className="w-100" src="img/product-detail-4.jpg" alt="..." /></div>
                    </div>
                </div>
                </div>
                <div className="col-sm-10 order-1 order-sm-2">
                <div className="swiper product-slider">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide h-auto"><a className="glightbox product-view" href="img/product-detail-1.jpg" data-gallery="gallery2" data-glightbox="Product item 1"><img className="img-fluid" src="img/product-detail-1.jpg" alt="..." /></a></div>
                    <div className="swiper-slide h-auto"><a className="glightbox product-view" href="img/product-detail-2.jpg" data-gallery="gallery2" data-glightbox="Product item 2"><img className="img-fluid" src="img/product-detail-2.jpg" alt="..." /></a></div>
                    <div className="swiper-slide h-auto"><a className="glightbox product-view" href="img/product-detail-3.jpg" data-gallery="gallery2" data-glightbox="Product item 3"><img className="img-fluid" src="img/product-detail-3.jpg" alt="..." /></a></div>
                    <div className="swiper-slide h-auto"><a className="glightbox product-view" href="img/product-detail-4.jpg" data-gallery="gallery2" data-glightbox="Product item 4"><img className="img-fluid" src="img/product-detail-4.jpg" alt="..." /></a></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* <!-- PRODUCT DETAILS--> */}
            <div className="col-lg-6" id='san-pham'>
            <ul className="list-inline mb-2 text-sm">
                <li className="list-inline-item m-0"><i className="fas fa-star small text-warning"></i></li>
                <li className="list-inline-item m-0 1"><i className="fas fa-star small text-warning"></i></li>
                <li className="list-inline-item m-0 2"><i className="fas fa-star small text-warning"></i></li>
                <li className="list-inline-item m-0 3"><i className="fas fa-star small text-warning"></i></li>
                <li className="list-inline-item m-0 4"><i className="fas fa-star small text-warning"></i></li>
            </ul>
            <h1>Red digital smartwatch</h1>
            <p className="text-muted lead">$250</p>
            <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.</p>
            <div className="row align-items-stretch mb-4">
                <div className="col-sm-5 pr-sm-0">
                <div className="border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white"><span className="small text-uppercase text-gray mr-4 no-select">Quantity</span>
                    <div className="quantity">
                    <button className="dec-btn p-0"><i className="fas fa-caret-left"></i></button>
                    <input className="form-control border-0 shadow-0 p-0" type="text" value="1" onChange={()=>{}}/>
                    <button className="inc-btn p-0"><i className="fas fa-caret-right"></i></button>
                    </div>
                </div>
                </div>
                <div className="col-sm-3 pl-sm-0"><a className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0" href="cart.html">Add to cart</a></div>
            </div><a className="text-dark p-0 mb-4 d-inline-block" href="#!"><i className="far fa-heart me-2"></i>Add to wish list</a> <br/>
            <ul className="list-unstyled small d-inline-block">
                <li className="px-3 py-2 mb-1 bg-white"><strong className="text-uppercase">SKU:</strong><span className="ms-2 text-muted">039</span></li>
                <li className="px-3 py-2 mb-1 bg-white text-muted"><strong className="text-uppercase text-dark">Category:</strong><a className="reset-anchor ms-2" href="#!">Demo Products</a></li>
                <li className="px-3 py-2 mb-1 bg-white text-muted"><strong className="text-uppercase text-dark">Tags:</strong><a className="reset-anchor ms-2" href="#!">Innovation</a></li>
            </ul>
            </div>
        </div>
        {/* <!-- DETAILS TABS--> */}
        <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
            <li className="nav-item"><a className="nav-link text-uppercase active" id="description-tab" data-bs-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a></li>
            <li className="nav-item"><a className="nav-link text-uppercase" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a></li>
        </ul>
        <div className="tab-content mb-5" id="myTabContent">
            <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
            <div className="p-4 p-lg-5 bg-white">
                <h6 className="text-uppercase">Product description </h6>
                <p className="text-muted text-sm mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            </div>
            <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
            <div className="p-4 p-lg-5 bg-white">
                <div className="row">
                <div className="col-lg-8">
                    <div className="d-flex mb-3">
                    <div className="flex-shrink-0"><img className="rounded-circle" src="img/customer-1.png" alt="" width="50"/></div>
                    <div className="ms-3 flex-shrink-1">
                        <h6 className="mb-0 text-uppercase">Jason Doe</h6>
                        <p className="small text-muted mb-0 text-uppercase">20 May 2020</p>
                        <ul className="list-inline mb-1 text-xs">
                        <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                        <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                        <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                        <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                        <li className="list-inline-item m-0"><i className="fas fa-star-half-alt text-warning"></i></li>
                        </ul>
                        <p className="text-sm mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    </div>
                    <div className="d-flex">
                    <div className="flex-shrink-0"><img className="rounded-circle" src="img/customer-2.png" alt="" width="50"/></div>
                    <div className="ms-3 flex-shrink-1">
                        <h6 className="mb-0 text-uppercase">Jane Doe</h6>
                        <p className="small text-muted mb-0 text-uppercase">20 May 2020</p>
                        <ul className="list-inline mb-1 text-xs">
                        <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                        <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                        <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                        <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                        <li className="list-inline-item m-0"><i className="fas fa-star-half-alt text-warning"></i></li>
                        </ul>
                        <p className="text-sm mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* <!-- RELATED PRODUCTS--> */}
        <h2 className="h5 text-uppercase mb-4">Related products</h2>
        <div className="row">
            {/* <!-- PRODUCT--> */}
            <div className="col-lg-3 col-sm-6">
            <div className="product text-center skel-loader">
                <div className="d-block mb-3 position-relative"><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-1.jpg" alt="..." /></a>
                <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="#!">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                    </ul>
                </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Kui Ye Chen’s AirPods</a></h6>
                <p className="small text-muted">$250</p>
            </div>
            </div>
            {/* <!-- PRODUCT--> */}
            <div className="col-lg-3 col-sm-6">
            <div className="product text-center skel-loader">
                <div className="d-block mb-3 position-relative"><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-2.jpg" alt="..." /></a>
                <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="#!">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                    </ul>
                </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Air Jordan 12 gym red</a></h6>
                <p className="small text-muted">$300</p>
            </div>
            </div>
            {/* <!-- PRODUCT--> */}
            <div className="col-lg-3 col-sm-6">
            <div className="product text-center skel-loader">
                <div className="d-block mb-3 position-relative"><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-3.jpg" alt="..." /></a>
                <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="#!">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                    </ul>
                </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Cyan cotton t-shirt</a></h6>
                <p className="small text-muted">$25</p>
            </div>
            </div>
            {/* <!-- PRODUCT--> */}
            <div className="col-lg-3 col-sm-6">
            <div className="product text-center skel-loader">
                <div className="d-block mb-3 position-relative"><a className="d-block" href="detail.html"><img className="img-fluid w-100" src="img/product-4.jpg" alt="..." /></a>
                <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-outline-dark" href="#!"><i className="far fa-heart"></i></a></li>
                    <li className="list-inline-item m-0 p-0"><a className="btn btn-sm btn-dark" href="#!">Add to cart</a></li>
                    <li className="list-inline-item mr-0"><a className="btn btn-sm btn-outline-dark" href="#productView" data-bs-toggle="modal"><i className="fas fa-expand"></i></a></li>
                    </ul>
                </div>
                </div>
                <h6> <a className="reset-anchor" href="detail.html">Timex Unisex Originals</a></h6>
                <p className="small text-muted">$351</p>
            </div>
            </div>
        </div>
        </div>
    </section>

        </>
    );
};

export default DetailBlog;