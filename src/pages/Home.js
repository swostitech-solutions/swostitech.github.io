import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import banner1 from "../assets/banner/slider1.jpg";
import banner2 from "../assets/banner/slider2.png";
import banner3 from "../assets/banner/slider3.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/grid";
import { Container } from "react-bootstrap";
import { Autoplay } from "swiper/modules";
import mindteck from "../assets/partner/mindteck.jpg";
import ibm from "../assets/partner/IBM.jpg";
import wipro from "../assets/partner/wipro.jpg";
import collabra from "../assets/partner/collabra.png";
import air from "../assets/partner/air.png";
import ParticlesBackground from "./Animation/ParticlesBackground";
import card1 from "../assets/card/card4.jpg";
import card2 from "../assets/card/card5.jpg";
import card3 from "../assets/card/card2.jpg";
import card4 from "../assets/product/nyay1.jpg";
const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const paragraphs = [
    {
      title: "Welcome to Swostitech",
      text: "We provide the best IT solutions for all fields around the world, including development and testing. The software world has enabled us to gather experience from diverse projects, technologies, and industries...",
      img: banner1,
    },
    {
      title: "Join to Swostitech",
      text: "Swostitech - Your Trusted Software Development Company. You just need a reliable software partner to help scale your growth with technology outsourcing services...",
      img: banner2,
    },
    {
      title: "Be With Us",
      text: "We built Swostitech to accelerate our clients' growth using software services. We translate business ideas into the language of modern technology...",
      img: banner3,
    },
  ];
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3600,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (current) => setActiveSlide(current),
  };
  // const cardData = [
  //   {
  //     title: "Expertise",
  //     description:
  //       "Your business continuity is our priority. We understand the dangers of downtimes and how they affect workflows. For this reason, when specialists leave, we provide replacements and transfer the necessary knowledge to new project members. This ensures smooth transitions in situations that require it.",
  //     image: banner1,
  //   },
  //   {
  //     title: "On Time Delivery",
  //     description:
  //       "At Swostitech, we have spent less time with quality delivering software projects for different industries around the globe. Working with companies from branches such as business , Real Estate, entertainment, e-commerce, education, and travel corporations, we learned how they run their business and understood their specific needs.",
  //     image: banner1,
  //   },
  //   {
  //     title: "Modern Technologies &Flexibility",
  //     description:
  //       "Swostitech’s development team will bring your vision to life by leveraging the latest technologies and industry best practices.We are cost-effective, flexible, and always on time. Our expert developers are flexible in projects is the ease with which your project complete with is open to changes in assumptions, goals, or the course of the can build that optimize user experience, facilitate transactions, and drive business growth.",
  //     image: banner1,
  //   },
  //   {
  //     title: "Customized Solutions",
  //     description:
  //       "We tailor our solutions to fit your unique needs, guaranteeing efficient results and customer satisfaction.We are cost-effective and always on time.                                                                   We can develop secure and efficient that support various internal functions such as project management, document sharing, collaboration, and workflow automation.",
  //     image: banner1,
  //   },
  // ];
  
  const cardData = [
    {
      title: "Expertise & Flexibility",
      description:
        "With deep technical know-how, our team ensures seamless transitions\nand adapts swiftly to changing project needs and business goals.",
      image: card1,
    },
    {
      title: "On-Time & Cost-Effective",
      description:
        "We consistently deliver high-quality solutions on schedule,\nwhile keeping development efficient and budget-friendly.",
      image: card2,
    },
    {
      title: "Custom Solutions",
      description:
        "We create tailored software that aligns with your vision,\nenhancing performance, usability, and business value.",
      image: card3,
    },
    {
      title: "Modern Technologies",
      description:
        "By using the latest tools and frameworks,\nwe turn ideas into powerful, scalable digital products.",
      image: card4,
    },
  ];
  
  
  
  const clientLogos = [
    { src: mindteck, alt: "Mindteck" },
    { src: ibm, alt: "IBM" },
    { src: wipro, alt: "Wipro" },
    { src: collabra, alt: "Collabra" },
    { src: air, alt: "Air" },
  ];

  const OurClients = () => (
    <section className="our-clients py-5" data-aos="zoom-out">
      <Container>
        <h4 className="clients-heading">Meet the partners</h4>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
          className="clients-slider"
        >
          {clientLogos.map((client, index) => (
            <SwiperSlide key={index} className="text-center">
              <img
                src={client.src}
                alt={client.alt}
                className="img-fluid"
                style={{ maxHeight: "80px", objectFit: "contain" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );

  return (
    <>
      <Container fluid className="px-0">
        <div className="home-container">
          <Slider {...settings} className="banner-slider">
            {paragraphs.map((item, index) => (
              <div className="banner-slide" key={index}>
                <img
                  src={item.img}
                  alt={`Banner ${index + 1}`}
                  className="banner-img"
                />
                <div className="banner-overlay">
                  <h1>{item.title}</h1>
                  <p className={activeSlide === index ? "zoom-in" : ""}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
          <ParticlesBackground />
          <div className="container py-5 mt-5">
            <div className="row gy-4">
              {cardData.map((card, idx) => (
                <div className="col-12 col-md-6 col-lg-3" key={idx}>
                  <div className="info-card ">
                    <div className="info-card-text">
                      <div className="text-content">
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                      </div>
                    </div>
                    <div className="info-card-img">
                      <img src={card.image} alt={`Card ${idx + 1}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <OurClients />
        </div>
      </Container>
    </>
  );
};

export default Home;
