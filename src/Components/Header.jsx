import React, { useState } from "react";
import Container from "./Layout/container.jsx";
import Button from "./Layout/Button.jsx";
import Flex from "./Layout/Flex.jsx";
import { TfiMenuAlt } from "react-icons/tfi";

function Header() {
  let [menuShow, setMenuShow] = useState(false);

  let handeToggleMenu = () => {
    setMenuShow(!menuShow);
  };

  return (
    <header className="bg-primary py-[22px] relative z-20">
      <Container>
        <nav>
          <Flex className="justify-between items-center gap: 25px">
            <img className="w-[110px] md:w-auto" src="logo.png" alt="logo" />
            <ul
              className={`
                ${menuShow ? "block" : "hidden"} 
                md:flex text-white gap-[25px] text-lg md:text-2xl font-medium cursor-pointer 
                
                // মোবাইল মেনু স্টাইল:
                absolute left-0 w-full md:relative md:w-auto bg-primary md:bg-transparent z-50 p-5 md:p-0 flex-col space-y-3 md:space-y-0 md:flex-row 
                top-[66px] 
              `}
            >
              <li className="p-2 md:p-0 hover:text-secondary">হোম</li>
              <li className="p-2 md:p-0 hover:text-secondary">
                আমাদের কোর্সসমহ
              </li>
              <li className="p-2 md:p-0 hover:text-secondary">যোগাযোগ</li>
              <li className="p-2 md:p-0 hover:text-secondary">
                ক্যারিয়ার গাইডলাইন
              </li>
            </ul>
            <Flex className="items-center gap-4">
              <Button
                className="bg-[#415A77] text-white cursor-pointer py-1 px-2 md:px-[58px] rounded-[10px] text-[15px] md:text-2xl font-semibold"
                title="কোর্স দেখুন"
              />
              <TfiMenuAlt
                onClick={handeToggleMenu}
                className="text-white text-xl md:hidden cursor-pointer z-50"
              />
            </Flex>
          </Flex>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
