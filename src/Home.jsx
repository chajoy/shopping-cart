import Button from "./components/Button";
import trainer_1 from "./assets/trainer_1.png";
import ItemCard from "./components/ItemCard";
import Carousel from "./components/Carousel";
import useFetchAPI from "./Hooks/useFetchAPI";
import heroBG from "./assets/hero-bg.jpg";
import trendingPattern from "./assets/newinPattern.png";
import Marquee from "./components/Marquee";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(255, 255, 255, 1)), url(${heroBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid grid-cols-1 items-center justify-items-center xl:grid-cols-2 max-w-maxw m-auto ">
        <div className="flex flex-col items-center text-center gap-5 order-last xl:order-first p-5">
          <h1 className="font-header text-4xl sm:text-5xl 2xl:text-6xl">
            Defined By Detail
          </h1>
          <p>
            Precision-crafted fashion with purpose in every element. From sole
            to stitch, it’s all in the details.
          </p>
          <Button to={"shop"}>Shop</Button>
        </div>
        <img
          src={trainer_1}
          alt="Photo of Trainer"
          draggable="false"
          className="w-150 xl:w-200 animate-float"
        />
      </div>
    </div>
  );
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
      className="py-10 flex flex-col gap-10"
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
      <h1 className="col-span-3 text-center font-bold text-4xl sm:text-5xl text-white">
        TRENDING
      </h1>
      <div className="max-w-maxw m-auto text-white hidden flex-col items-center  lg:flex">
        <div className="grid grid-cols-3 gap-10 mx-10 px-10">
          {trending.map((item, index) => {
            return <ItemCard item={item} key={index} hover={true}></ItemCard>;
          })}
        </div>
      </div>
      <Carousel className="block lg:hidden px-5" items={trending} />
      <div className="flex justify-center">
        <Button invert to={"shop"}>
          More
        </Button>
      </div>
    </div>
  );
};

const Home = () => {
  const { data, error, loading } = useFetchAPI(
    "https://fakestoreapi.com/products"
  );

  const filteredData = data
    ? data.filter((i) => i.category === "men's clothing")
    : [];

  const trending = filteredData ? filteredData.slice(1, 4) : [];

  return (
    <>
      <Hero />
      <Marquee toDisplay={"Sale on now"} />
      <Trending trending={trending} loading={loading} error={error} />
    </>
  );
};

export default Home;
