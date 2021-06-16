import React from "react";

//Assets
import { DiJavascript1, DiReact } from "react-icons/di";
import { RiFlutterFill } from "react-icons/ri";

//Compoenents
import SellingPoint from "./SellingPoint";

export default function Home() {
  return (
    <div id="home">
      <section className="intro">
        <div className="gradient-overlay"></div>
        {/* <img src={TreeImage} alt="Palm trees" /> */}
        <h1>Welcome</h1>
      </section>

      <section id="punch-line">
        <h2>Developer, designer, student</h2>
        <h1>Always ready for challenges</h1>
        <div className="talent-icons">
          <i>
            <DiJavascript1 />
          </i>
          <i>
            <DiReact />
          </i>
          <i>
            <RiFlutterFill />
          </i>
        </div>
      </section>

      <section id="selling-points">
        <SellingPoint />
        <SellingPoint />
        <SellingPoint />
        <SellingPoint />
      </section>
    </div>
  );
}
