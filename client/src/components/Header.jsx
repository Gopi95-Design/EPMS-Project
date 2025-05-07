import React from "react";
import '../Styles/Header.css'
import logo from '../Images/logo.png'
import caro4 from '../Images/caro4.png'
import caro1 from '../Images/caro1.png'
import caro2 from '../Images/caro2.png'
import caro3 from '../Images/caro3.png'

function Header() {
    return (
        <div className="container-fluid  ">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg ">
                    <a href="/" className="nav-linkk text-rgb(7, 4, 34) ">
                        <img className="logo" src={logo} alt="logo.png" /> <h4>Employee Profile Management System</h4>
                    </a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href="/admin" className="nav-link text-rgb(233, 233, 241)">
                                    Admin Login
                                </a>
                            </li>
                    
                            <li className="nav-item">
                                <a href="/" className="nav-link text-rgb(233, 233, 241)">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3000">
                        <img src={caro4} class="carosal w-100 " alt="caro4.png" />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={caro1} className="carosal w-100 " alt="caro1.png" />
                    </div>
                    <div class="carousel-item " data-bs-interval="1000">
                        <img src={caro2} className="carosal w-100" alt="caro2.png" />
                    </div>
                    <div class="carousel-item " data-bs-interval="1000">
                        <img src={caro3} className="carosal w-100" alt="caro3.png" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div >
        
    )
}

export default Header;




