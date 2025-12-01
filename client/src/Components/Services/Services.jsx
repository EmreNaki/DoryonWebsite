import React from 'react'
import { FaBuilding, FaProjectDiagram, FaDraftingCompass, FaHammer, FaIndustry } from "react-icons/fa";

const Services = () => {
  return (
    <div className=" parallax-section ">
      <div className="container my-5 p-5">
        <h1 className="text-center fw-bold text-dark custom-underline p-5 m-4">
          HİZMETLERİMİZ
        </h1>

        <div className="row g-4 justify-content-center">

          <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="card text-center bg-color p-4 h-100">
              <FaBuilding size={50} className="mx-auto mb-3 text-light" />
              <h5 className="text-light">Anahtar Teslim Konut Projeleri</h5>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="card text-center bg-color p-4 h-100">
              <FaProjectDiagram size={50} className="mx-auto mb-3 text-light" />
              <h5 className="text-light">Yap-Sat Proje Geliştirme</h5>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="card text-center bg-color p-4 h-100">
              <FaDraftingCompass size={50} className="mx-auto mb-3 text-light" />
              <h5 className="text-light">Mimari ve Mühendislik Tasarımı</h5>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="card text-center bg-color p-4 h-100">
              <FaHammer size={50} className="mx-auto mb-3 text-light" />
              <h5 className="text-light">Kentsel Dönüşüm ve Yenileme</h5>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="card text-center bg-color p-4 h-100">
              <FaIndustry size={50} className="mx-auto mb-3 text-light" />
              <h5 className="text-light">Ticari ve Endüstriyel Yapılar</h5>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
