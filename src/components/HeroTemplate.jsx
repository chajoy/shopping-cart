const HeroTemplate = ({ content }) => {
  return (
    <div
      style={content.backgroundStyle}
      className={content.backgroundColor ? content.backgroundColor : ""}
    >
      <div
        className={`grid grid-cols-1 items-center justify-items-center xl:grid-cols-2 max-w-maxw m-auto py-15`}
      >
        <div
          className={`flex flex-col items-center text-center gap-5 ${
            content.flipped ? "order-last xl:order-first" : "order-last"
          } p-5`}
        >
          <h1 className="font-header text-4xl sm:text-5xl 2xl:text-6xl">
            {content.header}
          </h1>
          <p>{content.text}</p>
          {content.button}
        </div>
        <img
          src={content.image.src}
          alt={content.image.title}
          draggable="false"
          className={`w-150 xl:w-200 ${
            content.image.float ? "animate-float" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default HeroTemplate;
