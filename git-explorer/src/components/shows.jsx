import React from "react";

const Show = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.overview}</p>
      {data.streamingInfo?.netflix ? (
        <a
          href={data.streamingInfo.netflix[0].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on Netflix
        </a>
      ) : (
        <p>Streaming information not available.</p>
      )}
    </div>
  );
};

export default Show;
