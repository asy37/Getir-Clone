import Slider from "react-slick";
import Banners from "../../api/banner.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <IoIosArrowForward size={22} className="cursor-pointer text-brand" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <IoIosArrowBack size={22} className="cursor-pointer text-brand" />
    </div>
  );
}

export default function Campaings() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-bgcolor shadow-inner">
      <div className="mx-auto md:container md:py-2">
        <h3 className="mb-3 hidden text-sm font-semibold text-textcolor md:ml-3 md:block">Kampanyalar</h3>
        <Slider className="flex items-center md:-mx-2" {...settings}>
          {Banners.length &&
            Banners.map((banner, index) => (
              <picture key={index} className="outline-0 md:px-2">
                <img key={banner.id} className=" md:rounded-lg " src={banner.image} alt="campaings" />
              </picture>
            ))}
        </Slider>
      </div>
    </div>
  );
}
