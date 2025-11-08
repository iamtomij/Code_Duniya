import React from "react";
import Container from "./Layout/container.jsx";
import Card from "./UI/Card.jsx";
import Flex from "./Layout/Flex.jsx";

function Reviaw() {
  let Tcard = [
    {
      parsan: "৯৫%",
      title: "সফলতার হার",
      desc: "একটি নির্দিষ্ট সংখ্যক শিক্ষার্থীদের কর্মজীবনে সফলভাবে নিয়োগের গল্প বোঝায়, যা সাধারণত প্রযুক্তি শিক্ষা প্রতিষ্ঠানগুলো তাদের সাফল্যের প্রমাণ হিসেবে তুলে ধরে।",
    },
    {
      parsan: "১০,০০০+%",
      title: "ক্যারিয়ার প্লেসমেন্ট",
      desc: "একটি নির্দিষ্ট সংখ্যক শিক্ষার্থীদের কর্মজীবনে সফলভাবে নিয়োগের গল্প বোঝায়, যা সাধারণত প্রযুক্তি শিক্ষা প্রতিষ্ঠানগুলো তাদের সাফল্যের প্রমাণ হিসেবে তুলে ধরে।",
    },
    {
      parsan: "১০০০০০+",
      title: "স্টুডেন্ট এর পছন্দ",
      desc: "একটি নির্দিষ্ট সংখ্যক শিক্ষার্থীদের কর্মজীবনে সফলভাবে নিয়োগের গল্প বোঝায়, যা সাধারণত প্রযুক্তি শিক্ষা প্রতিষ্ঠানগুলো তাদের সাফল্যের প্রমাণ হিসেবে তুলে ধরে।",
    },
  ];

  return (
    <section>
      <Container>
        <h1 className="text-center text-[36px] font-bold mb-[190px]">
          কেন আমরাই সেরা
        </h1>
        <p className="text-center text-[20px] font-medium">
          কেন আপনি আমাদের লার্নার হবেন
        </p>

        <Flex>
          {Tcard.map((item) => (
            <div className="px-3">
              <Card mal={item} />
            </div>
          ))}
        </Flex>
      </Container>
    </section>
  );
}

export default Reviaw;
