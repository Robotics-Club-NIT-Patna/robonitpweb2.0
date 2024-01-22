import Buttons from "../Buttons";

function InfoCard({img,title,desc}) {
    return (<div className="flex flex-col flex-wrap rounded-[2rem] bg-[#191919] p-[40px]">
        <div>
            <img src={img} />
        </div>
        <div className="mt-[30px]">
            <h1 className="text-[2rem] ">{title}</h1>
            <p className="text-[20px]">{desc}</p>
        </div>
        <div className="mt-[30px]">
            <Buttons buttonText={"Get Started"}/>
        </div>
    </div>);
}
export default InfoCard;