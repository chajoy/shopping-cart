import Button from "./components/Button";
import trainer_1 from "./assets/trainer_1.png";
import trainer_2 from "./assets/trainer_2.jpg";
import ItemCard from "./components/ItemCard";
import Carousel from "./components/Carousel";
import heroBG from "./assets/hero-bg.jpg";
import trendingPattern from "./assets/newinPattern.png";
import Marquee from "./components/Marquee";
import HeroTemplate from "./components/HeroTemplate";
import { useOutletContext } from "react-router-dom";

const Hero = () => {
  const content = {
    flipped: true,
    header: "Defined By Detail",
    text: "Precision-crafted fashion with purpose in every element. From sole to stitch, it’s all in the details.",
    image: {
      title: "image of trainer",
      src: trainer_1,
      float: true,
    },
    button: <Button to={"shop"}>Shop</Button>,
    backgroundStyle: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(255, 255, 255, 1)), url(${heroBG})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
  };

  return <HeroTemplate content={content} />;
};

const Trending = ({ trending, loading, error }) => {
  if (loading)
    return (
      <div className="bg-black py-10">
        <h1 className="text-white text-2xl">loading...</h1>
      </div>
    );

  if (error)
    return (
      <div className="bg-black py-10">
        <h1 className="text-white text-2xl">{error}</h1>
      </div>
    );

  return (
    <div
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 1) 80%),
          url(${trendingPattern})
        `,
        backgroundRepeat: `no-repeat, repeat`,
        backgroundSize: `cover, 200px`,
        backgroundPosition: `center`,
      }}
    >
      <div className="max-w-maxw m-auto flex flex-col gap-10 py-10 lg:p-10">
        <h1 className="text-center font-bold text-4xl sm:text-5xl text-white">
          TRENDING
        </h1>
        {loading ? (
          <div></div>
        ) : (
          <div>
            <div className="lg:grid grid-cols-3 gap-10 hidden">
              {trending.map((item, index) => {
                return (
                  <ItemCard item={item} key={index} hover={true}></ItemCard>
                );
              })}
            </div>
            <Carousel className="block lg:hidden px-5" items={trending} />
          </div>
        )}
        <div className="flex justify-center">
          <Button invert to={"shop"}>
            More
          </Button>
        </div>
      </div>
    </div>
  );
};

const Third = () => {
  const content = {
    flipped: false,
    header: "Every Workout. Every Step.",
    text: "From HIIT to cardio dance, treadmills to indoor cycling—whatever your style of fitness, there’s a SuperRep for that. Find the training shoe to match your workout.",
    image: {
      title: "image of trainer",
      src: trainer_2,
      float: false,
    },
    button: <Button to={"shop"}>Shop</Button>,
    backgroundColor: "bg-pistachio",
  };

  return <HeroTemplate content={content} />;
};

const Home = () => {
  const { data, loading, error } = useOutletContext();

  return (
    <>
      <Hero />
      <Marquee toDisplay={"Sale on now"} />
      <Trending
        trending={data ? data.slice(0, 3) : []}
        loading={loading}
        error={error}
      />
      <Third />
    </>
  );
};

export default Home;
