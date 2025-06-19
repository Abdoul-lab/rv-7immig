import React from 'react';

const blogPosts = [
  {
    id: 1,
    image: '/rv-7immig/images/blog1.jpg',
    categories: ['Working Visa', 'Working Visa'],
    author: 'Septimmigration',
    date: 'March 24, 2023',
    title: 'What visa do you need to work legally in Singapore?',
    excerpt: 'Meh synth Schlitz,tempor duis single-origin coffee ea next level ethnic fingerstache.',
    link: 'blog-details.html',
  },
  {
    id: 2,
    image: '/rv-7immig/images/bol.jpg',
    categories: ['Visa étudiants'],
    author: 'Septimmigration',
    date: 'March 24, 2023',
    title: 'What visa do you need to work legally in Singapore?',
    excerpt: 'Meh synth Schlitz,tempor duis single-origin coffee ea next level ethnic fingerstache.',
    link: 'blog-details.html',
  },
  {
    id: 3,
    image: '/rv-7immig/images/bol2.jpg',
    categories: ['Immigration Visa'],
    author: 'Septimmigration',
    date: 'March 24, 2023',
    title: 'What visa do you need to work legally in Singapore?',
    excerpt: 'Meh synth Schlitz,tempor duis single-origin coffee ea next level ethnic fingerstache.',
    link: 'blog-details.html',
  },
];

const BlogSection = () => {
  return (
    <div className="blog-area pt-65 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="dreamit-section-main-title-2">
              <h2>Ressources & Actualités</h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="title-content pb-4">
              <p>
                Cursus porta, feugiat primis in ultrice ligula risus auctor
                tempus dolor feugiat, felis lacinia risus interdum auctor id
                viverra dolor iaculis luctus placerat and massa
              </p>
            </div>
          </div>
        </div>

        <div className="row pt-15">
          {blogPosts.map((post) => (
            <div className="col-lg-4 col-md-6" key={post.id}>
              <div className="dreamit-single-blog-box">
                <div className="dreamit-blog-thumb">
                  <a href={post.link}>
                    <img src={post.image} alt="blog" />
                  </a>
                  <div className="post-catgory">
                    {post.categories.map((cat, index) => (
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
                    <a href={post.link}>
                      en savoir plus <i className="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
