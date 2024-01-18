import Link from "next/link";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";

const Card = ({ star, title, imgSrc, desc, name, id}) => {
  return (
    <div className="mx-2 flex flex-col gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-10 rounded-lg hover:shadow-xl transition-all">
      <div className="text-rose-600">
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        {star}
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="leading-loose">
        {desc}
      </p>
      <div className="flex items-center gap-4 mt-5">
        <Image src={imgSrc} width={50} height={50} alt="testimonials" />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <Link
            href="https://github.com/NaseemKhan005"
            target="_blank"
            className="text-rose-600 font-[500]"
          >
            {id}
          </Link>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="testimonial"
    >
      <div>
        <span className="service-name text-center ">TESTIMONIAL</span>
        <h2 className="title text-center ">Meet Client Satisfaction</h2>
      </div>
      <Carousel {...carouselParams}>
        <div>
          <Card
            star={<StarHalfRoundedIcon />}
            title="Skillscrolls elevated our reporting game using Power BI."
            imgSrc="/testimonials/1.png"
            name="Thierry fokko"
            id="@thierry"
            desc="reports expert, seamlessly navigated all domains, integrating Azure, Fabric, Databricks, and Power Automate. Skillscrolls is our go-to for unparalleled expertise."
          />
        </div>
        <div>
          <Card
            title="Navigating New Heights"
            imgSrc="/testimonials/2.png"
            name="Njang"
            id="@njang"
            desc="Skillscrolls transformed our approach to data. From Power BI reports to conquering new tech like Azure and Databricks, they're the driving force behind our success."
          />
        </div>
        <div>
          <Card
            star={<StarRoundedIcon />}
            title="Skillscrolls: The Pinnacle of Data Mastery"
            imgSrc="/testimonials/3.png"
            name="Abrahnan"
            id="@abhiii"
            desc="Our journey with Skillscrolls has been transformative. From Power BI reports to diving deep into Azure, Fabric, Databricks, and Power Automate – they master every domain with finesse. True partners in innovation."

          />
        </div>
        <div>
          <Card
            star={<StarHalfRoundedIcon />}
            title="Layout and organized layers"
            imgSrc="/testimonials/4.png"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPLaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
