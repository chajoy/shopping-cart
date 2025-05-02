import Button from "./components/Button";
import trainer_1 from "./assets/trainer_1.png";

const Home = () => {
  return (
    <div className="grid grid-cols-1 items-center justify-items-center xl:grid-cols-2">
      <div className="flex flex-col items-center text-center gap-5 order-last xl:order-first p-5">
        <h1 className="font-header text-4xl sm:text-5xl 2xl:text-6xl">
          Defined By Detail
        </h1>
        <p>
          Precision-built footwear with purpose in every line. From sole to
          stitch, it’s all in the details.
        </p>
        <Button to={"shop"}>Shop</Button>
      </div>
      <img
        src={trainer_1}
        alt="Photo of Trainer"
        draggable="false"
        className="w-150 xl:w-200"
      />
    </div>
  );
};

export default Home;
