const Blog = () => {
  return (
    <section className="blog section" id="blog">
      <div className="blog__container container">
        <h2 className="section__title">
          Our blogs food with <br />
          insightful topic
        </h2>

        <div class="blog__content grid">
          <article className="blog__card">
            <div className="blog__image">
              <img src="./media/chicken.jpg" alt="" className="blog__img" />
              <a href="#" className="blog__button">
                <i className="bx bx-right-arrow-alt"></i>
              </a>
              <div className="blog__stats">
                <div className="blog__reaction">
                  <i className="bx bx-comment"></i>
                  <span>134</span>
                </div>
                <div className="blog__reaction">
                  <i className="bx bx-show"></i>
                  <span>98,5k</span>
                </div>
              </div>
            </div>

            <div className="blog__data">
              <h2 className="blog__title">
                How to marinate chicken effectively
              </h2>
              <p classNameName="blog__description">
                Marinating chicken effectively involves combining flavors,
                ensuring even distribution of the marinade, and adhering to the
                recommended marinating time. .
              </p>
            </div>
          </article>
          <article className="blog__card">
            <div className="blog__image">
              <img
                src="./media/roasted-duck.jpg"
                alt=""
                className="blog__img"
              />
              <a href="#" class="blog__button">
                <i className="bx bx-right-arrow-alt"></i>
              </a>
              <div className="blog__stats">
                <div className="blog__reaction">
                  <i className="bx bx-comment"></i>
                  <span>96</span>
                </div>
                <div className="blog__reaction">
                  <i className="bx bx-show"></i>
                  <span>356,7k</span>
                </div>
              </div>
            </div>

            <div className="blog__data">
              <h2 className="blog__title">How to present a roasted duck dish</h2>
              <p className="blog__description">
                The presentation of a roasted duck dish is crucial for the
                culinary experience. Carefully arrange duck slices, add a
                delicious sauce, and aesthetically place accompaniments. Use
                suitable plates, fresh herbs, and edible garnishes for an
                appealing and balanced presentation..
              </p>
            </div>
          </article>
        </div>
            
      </div>
    </section>
  );
};

export default Blog;
