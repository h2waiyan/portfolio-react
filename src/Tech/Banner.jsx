import "./Tech.css";

const Banner = ({ images, speed = 5000 }) => {
  return (
    <div className="inner">
      <div className="wrapper">
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="" key={id}>
              <img
                src={image}
                alt={id}
                className="techimg filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="" key={id}>
              <img
                src={image}
                alt={id}
                className="techimg filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="" key={id}>
              <img
                src={image}
                alt={id}
                className="techimg filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export { Banner };
