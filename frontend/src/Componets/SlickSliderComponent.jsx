
import Slider from "react-slick";

const SlickSliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // For screens with width <= 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 2, // Scroll 2 slides at a time
        },
      },
      {
        breakpoint: 600, // For screens with width <= 600px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
      {
        breakpoint: 480, // For screens with width <= 480px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
    ],
  };

  return (
    <div className="container h-full w-[77%]  mx-auto p-4 z-50 bg-white rounded-xl">
      <Slider {...settings}>
        <div>
          <div className="h-[200px] w-[90%]  border flex justify-center items-center flex-col rounded-2xl bg-[rgb(225_252_242)] group">
            <img src="./1.svg" alt="Slide 1" className="w-[70%] h-[36%] group-hover:animate-bounce" />
            <div className="font-semibold">vegetables</div>
            <span className="text-sm text-gray-500">291 items</span>
          </div>
        </div>
        <div>
          <div className="h-[200px] w-[90%] border flex justify-center items-center flex-col rounded-2xl bg-[rgb(244_241_254)] group">
            <img src="./2.svg" alt="Slide 1" className="w-[70%] h-[36%]  group-hover:animate-bounce" />
            <div className="font-semibold">vegetables</div>
            <span className="text-sm text-gray-500">291 items</span>
          </div>
        </div>
        <div>
          <div className="h-[200px] w-[90%] border flex justify-center items-center flex-col rounded-2xl bg-[rgb(251_249_228)] group">
            <img src="./3.svg" alt="Slide 1" className="w-[70%] h-[36%]  group-hover:animate-bounce" />
            <div className="font-semibold">vegetables</div>
            <span className="text-sm text-gray-500">291 items</span>
          </div>
        </div>
        <div>
          <div className="h-[200px] w-[90%] border flex justify-center items-center flex-col rounded-2xl bg-[rgb(225_252_242)] group">
            <img src="./4.svg" alt="Slide 1" className="w-[70%] h-[36%]  group-hover:animate-bounce" />
            <div className="font-semibold">vegetables</div>
            <span className="text-sm text-gray-500">291 items</span>
          </div>
        </div>




      </Slider>
    </div>
  );
};

export default SlickSliderComponent;
