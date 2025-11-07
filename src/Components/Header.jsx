import React from "react";
import Container from "./Layout/container.jsx";
import Button from "./Layout/Button.jsx";
import Flex from "./Layout/Flex.jsx";
function Header() {
  return (
    <header className="bg-primary py-[22px]">
      <Container>
        <nav>
          <Flex className="justify-between items-center gap: 25px">
            <img className="mb-4" src="logo.png" alt="logo" />
            <ul className="flex text-white gap-[25px] text-2xl font-medium cursor-pointer">
              <li>হোম</li>
              <li>আমাদের কোর্সসমহ</li>
              <li>যোগাযোগ</li>
              <li>ক্যারিয়ার গাইডলাইন</li>
            </ul>
            <Button
              className="bg-[#415A77] text-white cursor-pointer py-1 px-[58px] rounded-[10px] text-2xl font-semibold"
              title="কোর্স দেখুন"
            />
          </Flex>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
