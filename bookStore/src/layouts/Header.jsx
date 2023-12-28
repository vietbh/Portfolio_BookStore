import { Link, useParams } from "react-router-dom";

function Header(){
    const currentPath = window.location.pathname;
    const Param = useParams();
    // console.log(currentPath);
    console.log(Param);
    return (
        <>
            <header className="header bg-white">
                <div className="container px-lg-3">
                    <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0"><a className="navbar-brand" href="/"><span className="fw-bold text-uppercase text-dark">BookStore</span></a>
                        <button className="navbar-toggler navbar-toggler-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                            <Link className={`nav-link ${Param === '/' || Param === '' ? 'active' : ' '}`} to="/">Trang chủ</Link>
                            </li>
                            <li className="nav-item">
                            <Link className={`nav-link ${Param === '/cua-hang' || currentPath === '/cua-hang' ? 'active' : ' '}`} to="/cua-hang">Cửa hàng</Link>
                            </li>
                            <li className="nav-item">
                            <Link className={`nav-link ${Param === '/bai-viet' ||  currentPath === '/bai-viet' ? 'active' : ' '}`} to="/bai-viet">Blog</Link>
                            </li>
                            {/*
                             */}
                            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="pagesDropdown" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Thể loại sách</a>
                            <div className="dropdown-menu mt-3 shadow-sm" aria-labelledby="pagesDropdown"><a className="dropdown-item border-0 transition-link" href="index.html">Homepage</a><a className="dropdown-item border-0 transition-link" href="shop.html">Category</a><a className="dropdown-item border-0 transition-link" href="detail.html">Product detail</a><a className="dropdown-item border-0 transition-link" href="cart.html">Shopping cart</a><a className="dropdown-item border-0 transition-link" href="checkout.html">Checkout</a></div>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">               
                            <li className="nav-item"><Link className={`nav-link ${Param === '/gio-hang' ? 'active' : ' '}`} to='/gio-hang'> <i className="fas fa-dolly-flatbed me-1 text-gray"></i>Giỏ hàng<small className="text-gray fw-normal">(2)</small></Link></li>
                            <li className="nav-item"><Link className="nav-link" href="#!"> <i className="far fa-heart me-1"></i><small className="text-gray fw-normal"> (0)</small></Link></li>
                            <li className="nav-item"><Link className={`nav-link ${Param === '/dang-nhap' ? 'active' : ' '}`} to="/dang-nhap"> <i className="fas fa-user me-1 text-gray fw-normal"></i>Đăng nhập</Link></li>
                        </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}
export default Header;