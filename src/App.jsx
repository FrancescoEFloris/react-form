import { useState } from "react";
import articles from './data/articles.js'

function App() {
  const [articlesData, setArticlesData] = useState(articles);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addArticleHandler = (event) => {
    event.preventDefault();
    const newArticle = {
      id: crypto.randomUUID(),
      title: title,
      content: content,
    }
    setArticlesData([...articlesData, newArticle]);
  };
  
  const delArticle = (id) => {
    setArticlesData(articlesData.filter((article) => article.id !== id))
  };

  return (
    <>
        <form onSubmit={addArticleHandler}>
          <input onChange={(event) => setTitle(event.target.value)} value={title} type="text" />
          <input onChange={(event) => setContent(event.target.value)} value={content} type="text" />
          <button type="submit">Aggiungi</button>
        </form>
        {console.log(articlesData)}
        <hr />
      <section>
        {articlesData.map(article => (
          <section key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <button onClick={() => delArticle(article.id)}>Rimuovi</button>
          </section>
        ))}
      </section>
    </>
  );
}
export default App;
