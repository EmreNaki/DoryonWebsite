import React from "react";
import apartment1 from "../../assets/apartment1.jpg"
import apartment2 from "../../assets/apartment2.jpg"
import apartment3 from "../../assets/apartment3.jpg"
import apartment4 from "../../assets/apartment4.jpg"
import apartment5 from "../../assets/apartment5.jpg"


export default function ProjectGrid() {
  return (
    <div className="container py-5">

      <div className="row g-4 mb-5">

        {/* CARD 1 */}
        <div className="col-md-6 col-lg-4">
          <div className="project-card">
            <img
              src={apartment1}
              alt="Luxury Apartment"
              className="project-img"
            />
            <div className="overlay">
              <h5 className="fw-bold">Luxury Apartment Complex</h5>
              <p>Istanbul</p>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="col-md-6 col-lg-4">
          <div className="project-card">
            <img
              src={apartment2}
              alt="Commercial Plaza"
              className="project-img"
            />
            <div className="overlay">
              <h5 className="fw-bold">Commercial Plaza</h5>
              <p>Ankara</p>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="col-md-6 col-lg-4">
          <div className="project-card">
            <img
              src={apartment3}
              alt="Industrial Warehouse"
              className="project-img"
            />
            <div className="overlay">
              <h5 className="fw-bold">Industrial Warehouse</h5>
              <p>Izmir</p>
            </div>
          </div>
        </div>

      </div>
       <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-5 mb-3">
          <div className="card h-100 text-center bg-dark text-light">
            <div className="card-header">
              <h5 className="card-title mb-0">TAMAMLANAN PROJELERİMİZ</h5>
            </div>
            <div className="card-body">
              <div
                className="bg-light mb-3"
              >
                <img
              src={apartment4}
              alt="Luxury Apartment"
              className="project-img"
            />
              </div>
              
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-5 mb-3">
          <div className="card h-100 text-center bg-dark text-light">
            <div className="card-header">
              <h5 className="card-title mb-0">GELECEK PROJELERİMİZ</h5>
            </div>
            <div className="card-body">
              <div
                className="bg-light mb-3"
              >
                <img
              src={apartment5}
              alt="Luxury Apartment"
              className="project-img"
            />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
