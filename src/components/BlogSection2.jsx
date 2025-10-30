import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const blogPosts = [
  {
    id: 1,
    title: "Rédiger un CV adapté aux normes locales",
    category: [""],//Conseils carrière
    date: "15 Octobre, 2025",
    author: "Septimmigration",
    image: "/images/CVcanada.png",
    excerpt: "Apprenez à rédiger un CV canadien clair, concis et adapté aux attentes des recruteurs.",
    link: '/blog/guide-cv-canadien',
  },
  {
    id: 2,
    title: "Les Marches Vers la Résidence Permanente au Canada",
    category: [""],//immigration
    date: "01 Octobre, 2025",
    author: "Septimmigration",
    image: "/images/ResidencePermanenteCanada.png",
    excerpt: "Toutes les étapes pour obtenir la résidence permanente, de l’évaluation à la préparation au départ.",
    link: '/blog/residence-permanente-canada',
  },
  {
    id: 3,
    title: "Deux réalités, Deux stratégies pour le Canada",
    category: [""],//Immigration
    date: "06 Octobre, 2025",
    author: "Septimmigration",
    image: "/images/MetiersCanada.png",
    excerpt: "Découvrez les opportunités pour les métiers qualifiés et peu qualifiés et les stratégies pour réussir votre projet d’immigration.",
    link: '/blog/metiers-qualifies-vs-peu-qualifies',
  },
  {
    id: 4,
    title: "La première étape vers la résidence permanente au Canada",
    category: [""],//immigration
    date: "09 Octobre, 2025",
    author: "Septimmigration",
    image: "/images/PermisTravailCanada.png",
    excerpt: "Comprendre l’importance du permis de travail comme tremplin vers la résidence permanente.",
    link: '/blog/permis-travail-canada',
  },
];

const BlogSection2 = () => {
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
                Cette section regroupe des actualités fiables et des informations pratiques concernant l’immigration au Canada, afin de vous tenir informé des évolutions récentes et de vous accompagner dans vos démarches.
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
                  <div className="dreamit-blog-thumb">
                    <a href="#">
                      <img src={post.image} alt="blog" />
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
                      <p>{post.excerpt}</p>
                    </div>
                    <div className="dreamit-blog-button">
                      <a href="/blog">
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
