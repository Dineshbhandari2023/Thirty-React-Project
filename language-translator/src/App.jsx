import "./styles.css";
import React, { useState } from "react";
import Field from "./components/Field";
import Translate from "./components/Translate";
import Languages from "./components/Languages";

export default function App() {
  const [language, setLanguage] = useState("es");
  const [text, setText] = useState("");

  return (
    <div className="m-5 p-6">
      <Field onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
