const Marquee = ({ toDisplay }) => {
  const text = Array(50).fill(toDisplay);

  return (
    <div className="p-3 bg-lime-300  text-2xl overflow-hidden ">
      {
        <ul className="flex gap-10 animate-marquee whitespace-nowrap">
          {[...text, ...text].map((item, index) => {
            return (
              <li key={index} className="text-black italic font-bold">
                {item.toUpperCase()}
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
};

export default Marquee;
