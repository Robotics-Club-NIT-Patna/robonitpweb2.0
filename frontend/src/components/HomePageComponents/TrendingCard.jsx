import Buttons from "../Buttons";

const TrendingCard = ({ imageUrl, title, description, date }) => {
  return (
      <div className="flex flex-col gap-6 group w-full p-5  bg-pink-400 items-center md:items-start">
        <div className="rounded-3xl overflow-hidden items-center justify-center h-[20rem] w-[24rem] flex mb-4">
          <img
            srcSet={imageUrl}
            alt="banner"
            className="transition scale-125 duration-1000 group-hover:scale-150 object-cover "
            height={440}
            width={440}
          ></img>
        </div>
        <p className="text-lg leading-6 text-gray-600 font-semibold px-4">{title}</p>
        <p className="text-3xl font-semibold px-4">{description}</p>
        <p className="text-lg text-gray-600 font-semibold px-4">{date}</p>
        <Buttons buttonText="Read More" />
      </div>
  );
};

export default TrendingCard;


