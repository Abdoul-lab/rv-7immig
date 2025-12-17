import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import articles from "../data/articlesData";

const BlogSection2 = () => {
  // Trier les articles par date décroissante et récupérer les 4 plus récents
  const blogPosts = useMemo(() => {
    return articles
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 4)
      .map((article, index) => ({
        id: index + 1,
        title: article.title,
        category: [article.category],
        date: new Date(article.date).toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).replace(/^\w/, (c) => c.toUpperCase()),
        author: "Septimmigration",
        image: article.mainImage,
        excerpt: article.intro,
        // Extrait tronqué pour inciter au clic
        excerptShort:
          article.intro && article.intro.length > 100
            ? article.intro.slice(0, 100).trim() + "..."
            : article.intro,
        link: `/blog/${article.slug}`,
      }));
  }, []);

  return (
    <div className="blog-area style-three upper pt-65">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="dreamit-section-main-title-2">
              <h2>Informations diverses & Actualités</h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="title-content pb-4">
              <p>
                Cette section regroupe des actualités fiables et des informations pratiques concernant l'immigration au Canada, afin de vous tenir informé des évolutions récentes et de vous accompagner dans vos démarches.
              </p>
            </div>
          </div>
        </div>

        <div className="row pt-45">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000 }}
            loop={true}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            spaceBetween={30}
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <div className="dreamit-single-blog-box">
                  <div className="dreamit-blog-thumb" style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
                    <a href="#">
                      <img src={post.image} alt="blog" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </a>
                    <div className="post-catgory">
                      {post.category.map((cat, index) => (
                        <a href="#" key={index}>{cat}</a>
                      ))}
                    </div>
                  </div>

                  <div className="dreamit-meta-box">
                    <a href="#">{post.author}</a>
                    <h3>{post.date}</h3>
                  </div>

                  <div className="dreamit-blog-content">
                    <div className="dreamit-blog-title">
                      <h2>
                        <a href={post.link}>{post.title}</a>
                      </h2>
                    </div>
                    <div className="dreamit-blog-text">
                      <p>{post.excerptShort}</p>
                    </div>
                    <div className="dreamit-blog-button">
                      <a href={post.link}>
                        Consulter le Blog <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BlogSection2;
