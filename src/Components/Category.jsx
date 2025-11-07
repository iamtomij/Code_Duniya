import Container from "./Layout/container.jsx";
import Category_item from "./UI/Category_item.jsx";
import Graphics from "../assets/images/graphics.png";
import Networking from "../assets/images/network.png";
import Softwere from "../assets/images/software.png";
import FilmMaking from "../assets/images/film.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
let Category = () => {
  let dhisting = [
    {
      name: "গ্রাফিকস",
      icon: Graphics,
    },
    {
      name: "নেটওয়ার্কিং",
      icon: Networking,
    },
    {
      name: "সফটওয়্যার",
      icon: Softwere,
    },
    {
      name: "ফিল্ম মিডিয়া",
      icon: FilmMaking,
    },
    {
      name: "গ্রাফিকস",
      icon: Graphics,
    },
    {
      name: "নেটওয়ার্কিং",
      icon: Networking,
    },
    {
      name: "সফটওয়্যার",
      icon: Softwere,
    },
    {
      name: "ফিল্ম মিডিয়া",
      icon: FilmMaking,
    },
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}>
        </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      ></div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 2000,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="absolute top-[-100px] w-full">
      <Container>
        <div className="max-w-[1002px] mx-auto">
          <Slider {...settings}>
            {dhisting.map((Citem) => (
              <Category_item item={Citem} />
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Category;
