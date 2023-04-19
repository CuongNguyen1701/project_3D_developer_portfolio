import {
  About,
  Hero,
  StarsCanvas,
  FileInput,
  Result,
} from "./MainPageComponents";
import React, { useState } from "react";

const MainPage = () => {
  const [responseData, setResponseData] = useState(null);
  const [history, setHistory] = useState([]);
  const updateResponse = (data) => {
    setResponseData(data);
  };
  return (
    <>
      <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
        <Hero />
      </div>
      <div className="relative z-0">
        <FileInput updateResponse={updateResponse} />
        {responseData && (
          <Result responseData={responseData} setHistory={setHistory} />
        )}
        {/* <History history={history} /> */}
      </div>
      <About />
      <StarsCanvas />
    </>
  );
};

export default MainPage;
