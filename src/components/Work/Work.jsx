import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Work.css';

const ProductCards = () => {
  return (
    <div className="product-grid-container">
      <div className="row product-grid">
        {/* Card 1: DueBox 2.0 */}
        <div className="col-md-6 mb-4">
          <div className="product-card">
            <div className="card-image-container">
              <img src="https://i.postimg.cc/T1DbRK1Z/Untitled-design-4-1.png" alt="Lumora" className="card-image" />
              <div className="card-overlay mt-4">
                <h3 className="card-title">LUMORA</h3>
              </div>
            </div>
            <div className="card-footer">
              <p className="card-description">A curated MERN stack resource collection for building powerful web apps.</p>
            </div>
          </div>
        </div>

        {/* Card 2: Messy Jurno 1.0 */}
        <div className="col-md-6 mb-4">
          <div className="product-card">
            <div className="card-image-container">
              <img src="https://i.postimg.cc/05B8knJS/Untitled-design-5-1.png" alt="Draft-blogapp" className="card-image" />
              <div className="card-overlay mt-4">
                <h3 className="card-title">DRAFT - BLOG APP</h3>
              </div>
            </div>
            <div className="card-footer">
              <p className="card-description">A seamless platform for writing, sharing, and exploring engaging blog posts.</p>
            </div>
          </div>
        </div>

        {/* Card 3: Wiz Partners */}
        <div className="col-md-6 mb-4">
          <div className="product-card">
            <div className="card-image-container">
              <img src="https://i.postimg.cc/rpHBXVmt/Untitled-design-6-1.png" alt="seminar hall" className="card-image" />
              <div className="card-overlay mt-4">
                <h3 className="card-title">SEMINAR HALL BOOKING SYSTEM</h3>
                <div className="card-info">
                 
                </div>
              </div>
            </div>
            <div className="card-footer">
              <p className="card-description">A streamlined system for booking and managing seminar halls with role-based access.</p>
            </div>
          </div>
        </div>

        {/* Card 4: Wiz Design System */}
        <div className="col-md-6 mb-4">
          <div className="product-card">
            <div className="card-image-container">
              <img src="" alt="" className="card-image" />
              <div className="card-overlay mt-4">
                <h3 className="card-title "></h3>
              </div>
            </div>
            <div className="card-footer">
              <p className="card-description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;