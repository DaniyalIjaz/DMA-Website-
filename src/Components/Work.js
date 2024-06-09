import React from 'react'
import './Work.css'

const Work = () => {
  return (
    <div className='py-4'>
      <section className="work-main text-center" id="ourwork">
      <h3 className="display-6 ">Our Work</h3>
      <p>Take a chunk of our work by visiting our social handles.</p>
      
<div className="container">
  {/* <h1  data-bs-toggle="modal" data-bs-target="#myModal" className="cont-h1 display-1"><i className=" bi bi-play-fill"></i></h1> */}
  <div className="social-icons">
  <a href="/" className="social-icon" target="_blank"><i className="fab fa-facebook"></i></a>
  <a href="/" className="social-icon" target="_blank"><i className="fab fa-twitter"></i></a>
  <a href="https://www.instagram.com/designmanassociates.pk/" className="social-icon" target="_blank"><i className="fab fa-instagram"></i></a>
  <a href="/" className="social-icon" target="_blank"><i className="fab fa-linkedin"></i></a>
  {/* <!-- Add more social media icons as needed --> */}
</div>

</div>



    </section>
    </div>
  )
}

export default Work