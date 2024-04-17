import React from "react";

function Home({ news }) {
  return (
    <div>
      <h1> Server Side Rendering</h1>
      {news.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.category}</h2>
            <p>
              {item.title} | {item.content}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Home;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  return {
    props: {
      news: data,
    },
  };
}
