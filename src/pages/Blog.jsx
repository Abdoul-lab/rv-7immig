import { useState } from "react";
import { Link } from "react-router-dom";
import articles from "../data/articlesData";

const Blog = () => {
  // Trier les articles par date (plus récent en premier)
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // États pour recherche, filtre et pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Récupérer toutes les catégories uniques
  const categories = ["Tous", ...new Set(articles.map((a) => a.category))];

  // Filtrer les articles
  const filteredArticles = sortedArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "Tous" || article.category === selectedCategory;
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Formater la date
  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="blog-area py-5">
      <div className="container">
        <h1 className="text-center mb-5">Nos articles</h1>

        {/* Barre de recherche et filtre */}
        <div className="row mb-4 g-2">
          <div className="col-md-6 col-sm-12">
            <input
              type="text"
              placeholder="Rechercher par titre..."
              className="form-control"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <select
              className="form-select"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
            >
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Liste d’articles */}
        <div className="row">
          {currentArticles.length > 0 ? (
            currentArticles.map((article) => (
              <div key={article.slug} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={article.mainImage}
                    alt={article.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <p className="text-muted small mb-2">
                      <span className="badge bg-secondary me-2">
                        {article.category}
                      </span>
                      {formatDate(article.date)}
                    </p>
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text flex-grow-1">
                      {article.intro.length > 100
                        ? article.intro.substring(0, 100) + "..."
                        : article.intro}
                    </p>
                    <Link
                      to={`/blog/${article.slug}`}
                      className="btn btn-primary mt-auto"
                    >
                      Lire la suite →
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">Aucun article trouvé.</p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-center mt-4">
            <nav>
              <ul className="pagination flex-wrap">
                <li
                  className={`page-item ${
                    currentPage === 1 ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                  >
                    ← Précédent
                  </button>
                </li>

                {[...Array(totalPages)].map((_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}

                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                  >
                    Suivant →
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
