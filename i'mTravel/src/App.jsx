import { useState } from "react";
import Search from "./components/Search/Search";
function App() {
  const [change, setChange] = useState();

  const handleOnSearchChange = (value) => {
    console.log(value);
  };
  return (
    <div className="max-w-[1080px] my-5 mx-auto bg-gray-200">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
