import { useState } from "react";
import Title from "../components/Title";

export default function ESignature() {
  const [name, setName] = useState("Your Signature");
  const [date, setDate] = useState("Select Date");

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleDateChange = (e: any) => {
    setDate(e.target.value);
  };
  const inputStyle = {
    border: "2px black solid",
    borderButtons: "2px dotted",
    outlined: "none",
    padding: ".40rem 0",
  };

  document.body.style.background = "#eee";

  return (
    <>
      <div className="container text-center mb-4">
        <Title classes={"title"} text={name} />
        <Title classes={"main-title mb-4"} text={!date ? "DoB" : date} />
        <p className="m-3 p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          asperiores facilis labore delectus omnis sit voluptatibus, distinctio
          totam laboriosam. Tenetur exercitationem fugit quasi ipsa nesciunt
          quidem veritatis, nihil dolores esse quos eum consequuntur adipisci
          eos pariatur, sint non beatae debitis et ratione architecto doloribus
          consectetur cum fuga. Eius, animi eaque? Perferendis, nesciunt quod
          ducimus dolore voluptatibus animi qui non inventore hic a maiores
          minima esse, ipsa numquam sequi at aliquid, pariatur vero assumenda?
          Rem, nisi. Accusantium eius exercitationem voluptatum qui ab illum
          labore nam quas commodi rerum nemo odit minus, officia cupiditate,
          totam maxime incidunt odio doloremque, repudiandae voluptas
          consequatur.
        </p>
        <footer
          className="d-flex"
          style={{
            justifyContent: "space-around",
            position: "relative",
            top: "40vh",
          }}
        >
          <input
            type="date"
            value={date}
            style={inputStyle}
            onChange={handleDateChange}
          />

          <input
            type="text"
            value={name}
            style={inputStyle}
            onChange={handleNameChange}
          />
        </footer>
      </div>
    </>
  );
}
