import React, { useState } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaMobileAlt } from "react-icons/fa";
import axios from "axios"

export const Contact  = () => {

  const [mail, setMail] = useState("")
  const [name, setName] = useState("")
  const [text, setText] = useState("")

    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      await axios.post(`${API_URL}/api/messages`, {
        mail, name, text
      },{
        headers: { "Content-Type": "application/json" }
      })
      alert("Message sent!")
    }catch (err){
      console.error(err)
      alert("Error sending message")
    }
  }



  return (
    <div>
        <Navbar/>
        <div className="bg-light text-dark py-3 ml-1 mt-5 mb-3">
  <h1 className="fw-bold m-1 p-2">İLETİŞİM</h1>
</div>
    <div className='container'>
        <div className="row ">
          <div
  className="col p-5"
 
>
           <p className='text-light'><FaMapMarkerAlt className='logo-bg'/>Hacı Abdi Mahallesi, 30 Ağustos Cd. No:9/B, 48200 Milas/Muğla</p>
      <p className='text-light'><FaPhoneAlt className='logo-bg'/> 0252 513 04 01</p>
       <p className='text-light'><FaMobileAlt className='logo-bg'/> 0532 436 04 01</p>
      <p className='text-light'><FaEnvelope className='logo-bg' /> info@comerlertyapi.com</p>
     
           
            <h2 className="p-2 text-light">Sosyal Medya</h2>
  <div className="d-flex flex-column  text-light mx-auto text-center">
    {/* Instagram */}
    <div className="d-flex align-items-center mb-3">
      <FaInstagram style={{ fontSize: "2rem", marginRight: "10px" }} />
      <a
        href="https://www.instagram.com/comertler_yapi/" // ← kendi linkini buraya yaz
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        Instagram
      </a>
    </div>

    {/* Facebook */}
    <div className="d-flex align-items-center">
      <FaFacebookF style={{ fontSize: "2rem", marginRight: "10px" }} />
      <a
        href="https://www.facebook.com/profile.php?id=100063476741656" // ← kendi linkini buraya yaz
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        Facebook
      </a>
    </div>
  </div>
              
        </div>
           <div className='col'>
            <div className='card'>
                <div className='card-body mx-auto'>
            <div
      className="mapouter"
      style={{
        position: "relative",
        textAlign: "right",
        width: "600px",
        height: "400px"
      }}
    >
      <div
        className="gmap_canvas"
        style={{
          overflow: "hidden",
          background: "none!important",
          width: "600px",
          height: "400px"
        }}
      >
        <iframe
          className="gmap_iframe"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=cömertler yapı&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ width: "600px", height: "400px" }}
          title="Google Map"
        />
      </div>
    </div>
            </div>
            </div>
        </div>
        </div>
    </div>
                <hr class="my-4 border-2 border-light"></hr>

<h1 className='text-center text-light fw-bold'>BİZE ULAŞIN</h1>
<div className='container m-4 ml-8 mx-auto text-dark'>
<form onSubmit={handleSubmit}>
  <div class="form-group">
    <label htmlFor="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={e => setMail(e.target.value)}/>
  </div>
<div class="form-group">
    <label htmlFor="exampleFormControlTextarea1">İsim & Soyism</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" onChange={e => setName(e.target.value)}></textarea>
  </div>
  
  <div class="form-group">
    <label htmlFor="exampleFormControlTextarea1">Mesajınızı buraya yazın</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e => setText(e.target.value)}></textarea>
  </div>
  <button type="submit" className="btn btn-primary mt-3">
      Gönder
    </button>
</form>
</div>
    <Footer/>
    </div>
  )
}