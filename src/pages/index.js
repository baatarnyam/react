import Header from "@/components/Header";
import Part1 from "@/components/part1";
import Part2 from "@/components/part2";
import Part3 from "@/components/part3";
import Part4 from "@/components/part4";
import Price from "@/components/Price";
// import Image from "public/desserts.jpeg";

export default function Home() {
  const header = { header: "Dessert Shop" };
  const part1 = { part1: "We make beautiful, creative and healthy dessert." };
  const part3 = { part3: "Dessert styles" };
  const part4 = {
    part4: "What do you want ?",
  };
  const price = {
    price1: "1. Cookies: $0.45 each",
    price2: "2. Cakes and pies: $5.00 each",
    price3: "3. Chocolate: $2.00 each",
  };
  return (
    <>
      <div id="conaiter">
        <div id="layout">
          <div id="header">
            <Header {...header} />
          </div>

          <div id="part1">
            <Part1 {...part1} />
          </div>

          <div>
            <hr id="part2" />
            <Part2 />
          </div>

          <div id="part3">
            <Part3 {...part3} />
            <img id="img" src="desserts.jpeg" />
          </div>

          <div id="part4">
            <Part4 {...part4} />
          </div>

          <div id="price">
            <Price {...price} />
          </div>
        </div>
      </div>
    </>
  );
}
