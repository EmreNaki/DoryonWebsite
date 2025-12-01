import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import background6 from "../../assets/background9.jpg"
import { Footer } from '../Footer/Footer'
import { Carousel } from '../Carousel/Carousel'
import ContactFolder from '../ContactFolder/ContactFolder'
import Services from '../Services/Services'
import { Link } from "react-router-dom";
import ProjectGrid from '../ProjectGrid/ProjectGrid'

export const HomePage = () => {
  return (
    <div>
        
        <div className="image-container">
  <img src={background6} alt="Description" className="banner-image" />

  <div className="image-text">
    <h2>Güçlü Temeller</h2>
    <p>Kalite ve güvenle inşa ediyoruz</p>
  <Link to="/pastprojects" className="cta-btn">Projelerimize Göz Atın</Link>
  </div>
</div>

          <div className="overlay"></div>
        <div className='row m-5 '>
            <div className="text-box">
          <h1 className='mx-auto text-center fw-bold text-light custom-underline '>BİZ KİMİZ?</h1>
          </div>
          <div className='col text-light bg-color '>
                        <div className="text-box">

          <h3 className='text-center text-light d-flex justify-content-center align-items-center pt-5'>15 yıllık tecrübemizle, Doryon Yapı ve Mühendislik olarak inşaat ve mühendislik alanında güven, kalite ve estetiği bir araya getiriyoruz. Her projede sağlam temeller üzerine modern yaşam alanları inşa ediyor, müşteri memnuniyetini daima ön planda tutuyoruz.</h3>
        </div>
         </div>
       
        </div>
        
<Services/>
      <hr class="section-divider bg-light"></hr>      

    <div className='container-fluid  d-flex flex-column '>
    <h1 class="big-title  text-light custom-underline ms-5 mx-auto me-5 ">PROJELERİMİZ</h1>
          
     <ProjectGrid/>   
    </div>
    

      <ContactFolder/>
    
    
    <Footer/>
    </div>
  )
}
