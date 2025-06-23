import { useOutletContext } from "react-router-dom";
import ItemCard from "./components/ItemCard";

const Hero = () => {
  return (
    <div className="bg-black/30 bg-blend-overlay bg-[url(/shopbg.jpg)] bg-cover bg-center">
      <div className="min-h-100 flex items-start justify-end flex-col text-white p-10 max-w-maxw m-auto">
        <h1 className="font-header text-6xl">Shop</h1>
        <p>Browse our latest selection</p>
      </div>
    </div>
  );
};

const Library = ({ data }) => {
  return (
    <div className="max-w-maxw m-auto">
      <div className="grid grid-cols-1 p-10 gap-10 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
        {data.map((item) => {
          return <ItemCard key={item.id} item={item} hover />;
        })}
      </div>
    </div>
  );
};

const Shop = () => {
  const { data, error, loading } = useOutletContext();

  return (
    <>
      <Hero />
      <Library data={data || []} />
    </>
  );
};

export default Shop;
