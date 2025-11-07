import React from "react";
import { FaStar } from "react-icons/fa6";
import Flex from "../Layout/Flex";
import { IoPerson } from "react-icons/io5";
import Button from "./../Layout/Button";

const CourseBox = ({ course }) => {
  return (
    <div className="mt-[53px] bg-[#415A77] text-white rounded-[15px]">
      <img src={course.thm} alt="thm" />
      <div className="px-6">
        <Flex className="justify-between mt-4 mb-2">
          <h4 className="text-[15px] font-medium">{course.dep}</h4>
          <Flex className="gap-1.5 items-center">
            <IoPerson />

            <h6>{course.st}</h6>
          </Flex>
        </Flex>
        <h2 className="text-[24px] font-bold">{course.name}</h2>
        <Flex className="justify-between items-center">
          <div>
              <Flex>
                <FaStar className="text-yellow-400" />
                <h3>{course.star}</h3>
              </Flex>
              <h5 className="text-2xl font-extrabold">{course.price}</h5>
           
          </div>
          <div>
            <Button className="bg-primary px-5 py-2 text-white text-lg rounded-[15px] cursor-pointer font-anek " title="ডিসকাউন্ট" />
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default CourseBox;
