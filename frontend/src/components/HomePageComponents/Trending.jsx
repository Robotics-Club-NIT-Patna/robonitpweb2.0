import TrendingCard from "./TrendingCard";
import trendingData from "../../trendingData";

const Trending = () => {
  return (
    <div className="flex flex-col mx-24">
      <div className="mt-10">
        <h1
          className="text-9xl font-anton"
          style={{
            WebkitTextStroke: "1px white",
            color: "black",
            textStroke: "1px white",
          }}
        >
          WHATS
        </h1>
        <h1 className="text-9xl font-anton text-#fcffff">TRENDING</h1>
      </div>

      {/* TrendingCard */}

      <div className="grid grid-cols-3 gap-16  mt-16 mb-10 overflow-x-scroll overflow-y-hidden">
        {trendingData.map((item) => (
          <TrendingCard
            key={item.id}
            title={item.title}
            description={item.description}
            date={item.date}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
