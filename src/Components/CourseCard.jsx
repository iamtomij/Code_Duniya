import React from "react";
import Container from "./Layout/container.jsx";
import Titlle from "./UI/Titlle.jsx";
import CourseBox from "./UI/CourseBox.jsx";
import MERNimg from "./../assets/images/mern.png";
import FIGMAimg from "./../assets/images/figma.png";
import VEditingimg from "./../assets/images/vediting.png";
import Flex from "./Layout/Flex.jsx";

const CourseCard = () => {
  let AllCourse = [
    {
      id: 1,
      name: "MERN Stack Development",
      dep: "Web and Softwere",
      price: "1,20000 TK",
      thm: MERNimg,
    },

    {
      id: 2,
      name: "UX/UI Design",
      dep: "Graphics & Multimedia",
      price: "1,20000 TK",
      thm: FIGMAimg,
    },

    {
      id: 3,
      name: "Professional Video Editing",
      dep: "Films & Media",
      price: "1,20000 TK",
      thm: VEditingimg,
    },
  ];
  return (
    <section className="mt-[170px]">
      <Container>
        <Titlle
          main_titlle="আমাদের কোর্স সমুহ"
          sub_title="আমাদের সমস্ত কোর্স সুদক্ষ মেন্টর দ্বারা পরিচালিত  এবং সমৃদ্ধ রিসোর্স দ্বারা পরিপূর্ণ"
        />
        <Flex className="justify-between">
          {AllCourse.map((item) => (
            <CourseBox key={item.id} course={item} />
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default CourseCard;
