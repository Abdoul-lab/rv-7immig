import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const blogPosts = [
  {
    id: 1,
    title: "What visa do you need to work legally in Singapore?",
    category: ["Working Visa", "Working Visa"],
    date: "March 24, 2023",
    author: "Septimmigration",
    image: "/assets/images/blog1.jpg",
    excerpt:
      "Meh synth Schlitz,tempor duis single-origin coffee ea next level ethnic fingerstache.",
  },
  {
    id: 2,
    title: "What visa do you need to work legally in Singapore?",
    category: ["Student Visa"],
    date: "March 24, 2023",
    author: "Septimmigration",
    image: "/assets/images/bol.jpg",
    excerpt:
      "Meh synth Schlitz,tempor duis single-origin coffee ea next level ethnic fingerstache.",
  },
  {
    id: 3,
    title: "What visa do you need to work legally in Singapore?",
    category: ["Immigration Visa"],
    date: "March 24, 2023",
    author: "Septimmigration",
    image: "/assets/images/bol2.jpg",
    excerpt:
      "Meh synth Schlitz,tempor duis single-origin coffee ea next level ethnic fingerstache.",
  },
  {
    id: 4,
    title: "What visa do you need to work legally in Singapore?",
    category: ["Student Visa"],
    date: "March 24, 2023",
    author: "Septimmigration",
    image: "/assets/images/bol.jpg",
    excerpt:
      "Meh synth Schlitz,tempor duis single-origin coffee ea next level ethnic fingerstache.",
  },
];

const BlogSection2 = () => {
  return (
    <div className="blog-area style-three upper pt-65">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="dreamit-section-main-title-2">
              <h2>Resources & Latest News</h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="title-content pb-4">
              <p>
                Cursus porta, feugiat primis in ultrice ligula risus auctor
                tempus dolor feugiat, felis lacinia risus interdum auctor id
                viverra dolo.
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
                        read more <i className="fas fa-chevron-right"></i>
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
