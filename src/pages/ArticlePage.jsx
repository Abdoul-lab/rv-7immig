import React from "react";
import { useParams } from "react-router-dom";
import articles from "../data/articlesData";
import BlogArticle from "./BlogArticle";
import PDFArticle from "./PDFArticle";

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <h2>Article introuvable</h2>;

  if (article.type === "pdf") {
    return (
      <PDFArticle
        title={article.title}
        intro={article.intro}
        pdfFile={article.pdfFile}
      />
    );
  }

  return <BlogArticle {...article} />;
};

export default ArticlePage;
