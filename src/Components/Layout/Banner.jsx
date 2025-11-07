import Container from "./container.jsx";
import Flex from "./Flex";
import React from "react";
import BImage from "../../assets/images/banner.png";
import Button from "./Button.jsx";
const Banner = () => {
  return (
    <section className="bg-primary">
      <Container>
        <div className="pt-[81px] pb-[172px]">
          <Flex>
            <div className="w-2/4">
              <h1 className="text-[50px] text-white font-bold max-w-[435px] ">
                দেশের সর্ব বৃহৎ আইটি ট্রেনিং প্লাটফর্ম
              </h1>
              <p className="text-[20px] font-light text-white max-w-[457px] mt-4">
                আইটি ট্রেনিং এর মাধ্যমে নিজেকে স্বাবলম্বী করুন। নিজেকে আইটি
                এক্সপার্ট হিসেবে গড়ে তুলুন
              </p>
              <Button
                className="bg-[#415A77] text-white
                cursor-pointer py-1 px-[58px] rounded-[10px] text-2xl font-semibold mt-[42px] mb-[174px]"
                title="কোর্স দেখুন"
              />
            </div>
            <div className="w-2/4 h-[300px] pb-[172px]">
              <img className="" src={BImage} alt="bannerimg" />
            </div>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
