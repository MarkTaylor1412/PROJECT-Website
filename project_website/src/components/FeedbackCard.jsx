import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] sm:mr-5 md:mr-10 mr-0 my-5 feedback-card">
    <img src={quotes} alt="quotes" className="w-[42px] h-[27px] object-contain" />
    <p className="font-poppins font-normal text-white text-[18px] leading-[32px] my-10">{content}</p>
    <div className="flex flex-row justify-center">
      <img src={img} alt="name" className="w-[48px] h-[48px] rounded-full" />

      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-white text-[20px] leading-[32px]">{name}</h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">{title}</p>
      </div>
    </div>
  </div>
)

export default FeedbackCard