import "./Summary.css";

import CV from "../../assets/cv/cv.pdf";
import React from "react";

const Summary = () => {
  return (
    <section id='summary'>
      <div className='summary-heading'>
        <strong>My Skillset</strong>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
        <a href={CV} download className='btn-link'>
          Get CV <i className='fa-solid fa-download'></i>
        </a>
      </div>
      <div className='summary-details'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi a ut,
          nesciunt dolorem officia vitae doloremque ea cupiditate adipisci ab
          libero minus, est tenetur voluptatem perspiciatis ipsa accusantium cum
          corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Temporibus voluptas provident officia quam obcaecati laboriosam ullam
          rerum error quisquam aliquam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Modi a ut, nesciunt dolorem officia vitae doloremque
          ea cupiditate adipisci ab libero minus, est tenetur voluptatem
          perspiciatis ipsa accusantium cum corporis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Temporibus voluptas provident officia
          quam obcaecati laboriosam ullam rerum error quisquam aliquam.
        </p>
      </div>
    </section>
  );
};

export default Summary;
