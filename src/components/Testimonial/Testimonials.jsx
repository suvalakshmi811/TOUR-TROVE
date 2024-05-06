import React from "react";
import Slider from "react-slick";
import ava01 from '../../assets/images/ava-1.jpg'
import ava02  from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

  const settings= {
       dots:true,
       infinite:true,
       autoplay:true,
       speed:1000,
       swipeToSlide:true,
       autoplaySpeed:2000,
       slidesTosShow:3,

       responsive:[
        {
               breakpoint: 992,
             settings: {
               slidesTosShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
              },
        },
        {
          breakpoint: 576,
          settings: {
            slidesTosShow: 1,
            slidesToScroll: 1, 
          },
        },
      ],
    };

  return (
  <Slider {...settings}>
    <div className="testimonial py-4 px-3">
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Minus sit,explicaob provident hic dustinction molestias
       Voluptatum nobis alias placet suscipit earum debitis 
       recussandane volupate illum expedit corrupti aliquid
        doloribus delectus?
      </p>
      <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava01} className="w-25 h-25 rounded-2" alt=""  />
      </div>
      <div>
        <h6 className="mb-0 mt-3">John Doe</h6>
        <p>Customer</p>
      </div>
    </div>
    <div className="testimonial py-4 px-3">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit,
        explicaob provident hic dustinction molestias Voluptatum nobis alias
        placet suscipit earum debitis recussandane volupate illum expedita
        corrupti aliquid doloribus delectus?
      </p>
      <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
      </div>
      <div>
        <h6 className="mb-0 mt-3">Lia Franklin</h6>
        <p>Customer</p>
      </div>
    </div>
    <div className="testimonial py-4 px-3">
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit,
        explicaob provident hic dustinction molestias Voluptatum nobis alias
        placet suscipit earum debitis recussandane volupate illum expedita
        corrupti aliquid doloribus delectus?
      </p>
      <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
      </div>
      <div>
        <h6 className="mb-0 mt-3">John Doe</h6>
        <p>Customer</p>
      </div>
    </div>
    <div className="testimonial py-4 px-3">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit,
        explicaob provident hic dustinction molestias Voluptatum nobis alias
        placet suscipit earum debitis recussandane volupate illum expedita
        corrupti aliquid doloribus delectus?
      </p>
      <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
      </div>
      <div>
        <h6 className="mb-0 mt-3">Lia Franklin</h6>
        <p>Customer</p>
      </div>
    </div>

  </Slider>
  );
  };

export default Testimonials;
