import React, { useState } from "react"; // 
import Container from "./Layout/container.jsx";
import Titlle from "./UI/Titlle.jsx";
import CourseBox from "./UI/CourseBox.jsx";
import MERNimg from "./../assets/images/mern.png";
import FIGMAimg from "./../assets/images/figma.png";
import VEditingimg from "./../assets/images/vediting.png";
import Flex from "./Layout/Flex.jsx";
import Button from "./Layout/Button.jsx";

const CourseCard = () => {

  const [isShowMore, setIsShowMore] = useState(false);


  const handleToggle = () => {
    setIsShowMore(!isShowMore);
  };

  let AllCourse = [
    {
      id: 1,
      name: "MERN Stack Development",
      dep: "Web and Softwere",
      price: "৳1,20000 BDT",
      star: "Rating | 450 Reviews",
      thm: MERNimg,
      st: "৩০০০ স্টুডেন্ট",
    },

    {
      id: 2,
      name: "UX/UI Design",
      dep: "Graphics & Multimedia",
      price: "৳1,20000 BDT",
      thm: FIGMAimg,
      star: "Rating | 450 Reviews",
      st: "৩০০০ স্টুডেন্ট",
    },

    {
      id: 3,
      name: "Professional Video Editing",
      dep: "Films & Media",
      price: "৳1,20000 BDT",
      star: "Rating | 450 Reviews",
      thm: VEditingimg,
      st: "৩০০০ স্টুডেন্ট",
    },

    {
      id: 4, 
      name: "MERN Stack Development (Extra)",
      dep: "Web and Softwere",
      price: "৳1,20000 BDT",
      star: "Rating | 450 Reviews",
      thm: MERNimg,
      st: "৩০০০ স্টুডেন্ট",
    },

    {
      id: 5, 
      name: "UX/UI Design (Extra)",
      dep: "Graphics & Multimedia",
      price: "৳1,20000 BDT",
      thm: FIGMAimg,
      star: "Rating | 450 Reviews",
      st: "৩০০০ স্টুডেন্ট",
    },

    {
      id: 6, 
      name: "Professional Video Editing (Extra)",
      dep: "Films & Media",
      price: "৳1,20000 BDT",
      star: "Rating | 450 Reviews",
      thm: VEditingimg,
      st: "৩০০০ স্টুডেন্ট",
    },
  ];
  

  const visibleCourses = AllCourse.slice(0, 3); 
  const extraCourses = AllCourse.slice(3);    

  return (
    <section className="mt-[170px]">
      <Container>
        <Titlle
          main_titlle="আমাদের কোর্স সমুহ"
          sub_title="আমাদের সমস্ত কোর্স সুদক্ষ মেন্টর দ্বারা পরিচালিত এবং সমৃদ্ধ রিসোর্স দ্বারা পরিপূর্ণ"
        />
        <Flex className="justify-between flex-wrap">
          
          {visibleCourses.map((item) => (
            <CourseBox key={item.id} course={item} />
          ))}

         
          {isShowMore && (
            <>
              {extraCourses.map((item) => (
                <CourseBox key={item.id} course={item} />
              ))}
            </>
          )}

        </Flex>
        
        
        <Button
            onClick={handleToggle}
            className="bg-[#415A77] text-white
                cursor-pointer py-2 px-[58px] rounded-[15px] text-2xl font-semibold mt-[42px] mb-[174px] mx-auto block"
            title={isShowMore ? "কম দেখুন" : "আরও কোর্স দেখুন"} 
        />
      </Container>
    </section>
  );
};

export default CourseCard;