import { useState } from "react";
import articles from './data/articles.js'

function App() {
  const [newArticle, setNewArticle] = useState("");
  return (
    <div className="wrapper">
      {articles.map(article => (
        <section key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </section>
      ))}
    </div>
  );
}
export default App;
