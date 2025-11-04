import { useParams } from "react-router-dom";
import articles from "../data/articlesData";
import BlogArticle from "./BlogArticle";
import PDFArticle from "./PDFArticle";

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <p>Article non trouvé.</p>;
  }

  // Rendu conditionnel selon le type
  if (article.type === "pdf") {
    return (
      <PDFArticle
        title={article.title}
        intro={article.intro}
        pdfFile={article.pdfFile}
      />
    );
  }

  return (
    <BlogArticle
      title={article.title}
      breadcrumb={article.breadcrumb}
      mainImage={article.mainImage}
      intro={article.intro}
      highlights={article.highlights}
      sections={article.sections}
    />
  );
};


export default ArticlePage;
