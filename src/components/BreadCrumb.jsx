const Breadcrumb = ({ title, links = [] }) => {
  return (
    <div className="breatcome-area d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breatcome-content text-center">
              <div className="breatcome-content-title">
                <h1>{title}</h1>
              </div>
              <div className="breatcome-content-text">
                <ul>
                  <li>
                    {links.map((link, index) => (
                      <span key={index}>
                        {link.href ? (
                          <a href={link.href}>{link.label}</a>
                        ) : (
                          <span>{link.label}</span>
                        )}
                        {index < links.length - 1 && (
                          <>
                            {" "}
                            <i className="fas fa-chevron-right"></i>{" "}
                          </>
                        )}
                      </span>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
