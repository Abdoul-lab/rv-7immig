import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const blogPosts = [
  {
    id: 1,
    title: "Entrée Express : Comment réussir sa demande en 2025",
    category: ["Working Visa"],
    date: "14 Août, 2025",
    author: "Septimmigration",
    image: "/images/EntréeExpress.jpeg",
    excerpt:
      "Le guide complet pour réussir sa demande d'Entrée express en 2025.",
  },
  {
    id: 2,
    title: "PSTQ : Nouveau programmes d’immigration au Canada",
    category: [""],
    date: "12 Août, 2023",
    author: "Septimmigration",
    image: "/images/PSTQ.png",
    excerpt:
      "Votre petit guide pour vous aider à comprendre 🧏🏾‍♀️ éviter les erreurs 🙅🏾‍♂️ augmenter vos chances 🍀 d’immigrer au Québec",
  },
  {
    id: 3,
    title: "Pourquoi immigrer au Canada ?",
    category: ["Immigration Visa"],
    date: "March 24, 2023",
    author: "Septimmigration",
    image: "/images/bol2.jpg",
    excerpt:
      "Découvrez les avantages d'immigrer au Canada et comment Septimmigration peut vous aider dans votre parcours.",
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
                        <a href="blog-details.html">{post.title}</a>
                      </h2>
                    </div>
                    <div className="dreamit-blog-text">
                      <p>{post.excerpt}</p>
                    </div>
                    <div className="dreamit-blog-button">
                      <a href="#">
                        En savoir plus <i className="fas fa-chevron-right"></i>
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
