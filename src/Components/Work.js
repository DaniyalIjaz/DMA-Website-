import React from 'react'
import './Work.css'

const Work = () => {
  return (
    <div>
      <section className="work-main text-center" id="ourwork">
      <h3 className="display-6 ">Our Work</h3>
      <p>Take a chunk of our work by visiting our social handles.</p>
      
<div className="container">
  {/* <h1  data-bs-toggle="modal" data-bs-target="#myModal" className="cont-h1 display-1"><i className=" bi bi-play-fill"></i></h1> */}
  <div class="social-icons">
  <a href="/" class="social-icon" target="_blank"><i class="fab fa-facebook"></i></a>
  <a href="/" class="social-icon" target="_blank"><i class="fab fa-twitter"></i></a>
  <a href="https://www.instagram.com/designmanassociates.pk/" class="social-icon" target="_blank"><i class="fab fa-instagram"></i></a>
  <a href="/" class="social-icon" target="_blank"><i class="fab fa-linkedin"></i></a>
  {/* <!-- Add more social media icons as needed --> */}
</div>

</div>

{/* <!-- The Modal --> */}
<div className="modal fade" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">

      {/* <!-- Modal Header --> */}
      <div className="modal-header">
        <h4 className="modal-title">Bootstrap Part 1</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      {/* <!-- Modal body --> */}
      <div className="modal-body">
<p className="text-start">Full Stack Web Development Course</p>
<iframe width="470" height="320" src="https://www.youtube.com/embed/ppeaGTE7fs4?si=EuVox-p1y0Il0GXH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</div>

    </section>
    </div>
  )
}

export default Work