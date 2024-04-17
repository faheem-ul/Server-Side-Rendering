import React from "react";

function NewsCatergory({ articles, newscategory }) {
  return (
    <div>
      <h1>News about {newscategory}</h1>
      {/* {console.log(articles)} */}

      {articles.map((article) => (
        <div key={article.id}>
          <>{article.title}</>
          <>{article.content}</>
        </div>
      ))}
      <hr />
    </div>
  );
}

export default NewsCatergory;

export async function getServerSideProps(context) {
  //   console.log("context", context);
  const { params, req, res } = context;
  console.log(req.headers.cookie);
  res.setHeader("set-cookie", ["name=test user"]);
  const { newscategory } = params;
  //   console.log("params", params);
  const response = await fetch(
    `http://localhost:4000/news/?category=${params.newscategory}`
  );
  const data = await response.json();
  //   console.log(data);
  return {
    props: {
      articles: data,
      newscategory,
    },
  };
}
