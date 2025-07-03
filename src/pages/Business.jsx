import React from "react";
import { Link } from "react-router-dom";

const Business = () => {
  return (
    <>
{/*==================================================*/}
{/* start Septimmigration breatcome Area */}
{/*==================================================*/}
<div className="breatcome-area d-flex align-items-center">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="breatcome-content text-center">
          <div className="breatcome-content-title">
            <h1>Business</h1>
          </div>
          <div className="breatcome-content-text">
            <ul>
              <li>
                <a href="index.html">HOME </a>
                <i className="fas fa-chevron-right"></i> <span>PR VISA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Blog Section */}
<div className="blog-area pt-65 pb-60">
        <div className="container">
          <div className="row pt-20">
            <div className="col-lg-8">
              <div className="row">
                {/* Blog Post */}
                {[1, 2, 3, 4, 5].map( index => (
                  <div className="col-lg-12 col-md-6" key={index}>
                    <div className="dreamit-single-blog-box">
                      <div className="dreamit-blog-thumb">
                        <Link to="#">
                          <img src={`/rv-7immig/images/blog${index % 2 === 0 ? 2 : 1}.jpg`} alt="" />
                        </Link>
                        <div className="post-catgory">
                          <Link to="#">Working Visa</Link>
                          <Link to="#">Working Visa</Link>
                        </div>
                      </div>
                      <div className="dreamit-meta-box">
                        <Link to="#">Septimmigration</Link>
                        <h3>March 24, 2023</h3>
                      </div>
                      <div className="dreamit-blog-content">
                        <div className="dreamit-blog-title">
                          <h2>
                            <Link to="blog-details.html">What visa do you need to work legally in Singapore?</Link>
                          </h2>
                        </div>
                        <div className="dreamit-blog-text">
                          <p>
                            Meh synth Schlitz,tempor duis single-origin coffee ea next level ethnic fingerstache.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Pagination */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="pagiation">
                      <div className="page-number pt-30">
                        <ul>
                          <li><Link to="blog-grid.html" className="active">1</Link></li>
                          <li><Link to="#">2</Link></li>
                          <li><Link to="#">3</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Section */}
            <div className="col-lg-4">
              <div className="sidebar-box">
                <div className="sidebar-search">
                  <input type="text" name="search" placeholder="Search" />
                  <button type="button" name="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
              <div className="sidebar-box">
                <div className="sidebar-title">
                  <h2>Categories</h2>
                </div>
                <div className="dreamit-section-bar mb-20"></div>
                <div className="sidebar-category">
                  <ul>
                    <li><Link to="business.html">Business Visa</Link></li>
                    <li><Link to="Immigration-visa.html">Immigration Visa</Link></li>
                    <li><Link to="pr-visa.html">PR Visa</Link></li>
                    <li><Link to="Student-visa.html">Student Visa</Link></li>
                    <li><Link to="Working-visa.html">Working Visa</Link></li>
                  </ul>
                </div>
              </div>

              {/* Calendar Section */}
              <div className="celender-box">
                <div className="widget-items mb-40">
                  <div className="calender-area">
                    <div className="widget-title">
                      <h2>Calender</h2>
                      <div className="dreamit-section-bar mb-20"></div>
                      <span></span>
                    </div>
                    <div className="tag-item">
                      <div className="curr-month"><b>January</b></div>
                      <div className="all-days">
                        <ul>
                          <li>S</li>
                          <li>M</li>
                          <li>T</li>
                          <li>W</li>
                          <li>T</li>
                          <li>F</li>
                          <li>S</li>
                        </ul>
                      </div>
                      <div className="all-date">
                        <ul></ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tag Cloud Section */}
              <div className="sidebar-box">
                <div className="sidebar-title">
                  <h2>Tag cloud</h2>
                </div>
                <div className="dreamit-section-bar mb-20"></div>
                <div className="sidebar-cloud">
                  <Link to="bootstrap.html">Bootstrap</Link>
                  <Link to="business.html">Business</Link>
                  <Link to="corporatr.html">Corporat</Link>
                  <Link to="Portfolio-Septimmigration.html">Portfolio</Link>
                  <Link to="responsive.html">Responsive</Link>
                  <Link to="Technology.html">Technology</Link>
                </div>
              </div>

              {/* Archives Section */}
              <div className="sidebar-box">
                <div className="sidebar-title">
                  <h2>Archives</h2>
                </div>
                <div className="dreamit-section-bar mb-20"></div>
                <div className="sidebar-archives">
                  <ul>
                    <li><Link to="#">March 2023</Link></li>
                    <li><Link to="#">April 2023</Link></li>
                    <li><Link to="#">May 2023</Link></li>
                    <li><Link to="#">June 2023</Link></li>
                  </ul>
                </div>
              </div>

              {/* Meta Section */}
              <div className="sidebar-box">
                <div className="sidebar-title">
                  <h2>Meta</h2>
                </div>
                <div className="dreamit-section-bar mb-20"></div>
                <div className="sidebar-meta">
                  <ul>
                    <li><Link to="#">Log in</Link></li>
                    <li><Link to="#">Entries feed</Link></li>
                    <li><Link to="#">Comments feed</Link></li>
                    <li><Link to="#">WordPress.org</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
</>
  );
};

export default Business;
