import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Work.css';
import { useNavigate } from "react-router-dom";

const ProductCards = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
      const cards = document.querySelectorAll('.product-card');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      }, { threshold: 0.1 });
      
      cards.forEach(card => {
        observer.observe(card);
      });
      
      return () => observer.disconnect();
    }, []);
    
  return (
    <div className="product-grid-container">
      <div className="row product-grid">
        {/* Card 1: DueBox 2.0 */}
        <div className="col-md-6 mb-4">
          <div className="product-card">
            <div className="card-image-container">
              <a href="https://lumora-web.netlify.app/" target='_blank'>
              <img src="https://i.postimg.cc/T1DbRK1Z/Untitled-design-4-1.png" alt="Lumora" className="card-image" /></a>
              <div className="card-overlay mt-4">
                <h3 className="card-title">LUMORA</h3>
              </div>
            </div>
            <div className="card-footer">
              <p className="card-description mt-2">A curated MERN stack resource collection for building powerful web apps.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="product-card">
            <div className="card-image-container">
              <a href="https://draft-blogapp.vercel.app/" target='_blank'>
              <img src="https://i.postimg.cc/L5x55XsQ/aboutmockups-2-1.png" alt="Draft-blogapp" className="card-image" /></a>
              <div className="card-overlay mt-4">
                <h3 className="card-title">DRAFT - BLOG APP</h3>
              </div>
            </div>
            <div className="card-footer">
              <p className="card-description mt-2">A seamless platform for writing, sharing, and exploring engaging blog posts.</p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="product-card">
            <div className="card-image-container">
              <a href="https://stalwart-cat-1329d9.netlify.app/" target="_blank">
              <img src="https://i.postimg.cc/rpHBXVmt/Untitled-design-6-1.png" alt="seminar hall" className="card-image" /></a>

              <div className="card-overlay mt-4">
                <h3 className="card-title">SEMINAR HALL BOOKING SYSTEM</h3>
                <div className="card-info">
                 
                </div>
              </div>
            </div>
            <div className="card-footer">
              <p className="card-description mt-2">A streamlined system for booking and managing seminar halls with role-based access.</p>
            </div>
          </div>
        </div>

        {/* Card 4: Wiz Design System */}
        <div className="col-md-6 mb-4">
          <div className="product-card">
            <div className="card-image-container">
              <a href="https://digital-academic-library.vercel.app/" target='_blank'>
              <img src="https://i.postimg.cc/MpC4zC60/aboutmockups.png" alt="" className="card-image" /></a>
              <div className="card-overlay mt-4">
                <h3 className="card-title">Digital Academic Library</h3>
              </div>
            </div>
            <div className="card-footer">
              <p className="card-description mt-2">A platform to discover resources, collaborate in dedicated discussion rooms and solve problems using AI-ChatBot.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;