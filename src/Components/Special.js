const Special = () => {
  return (
    <div className="special section container" id="special">
      <div className="special__container">
        <div className="special__box">
          <h2 className="section__title">
            Awaken your senses with an explosion of <br/>
            exquisite flavors that will delight your palate
          </h2>
        </div>

        <div className="special__category">
          <div className="special__group">
            <div className="special__img__border">
              <img
                src="./media/poulet2.webp"
                alt=""
                class="special__img"
              />
            </div>
            <h3 className="special__title">Best recipes</h3>
            <p class="special__description">
              We select the best recipe, for a true taste.
            </p>
          </div>
          <div className="special__group">
            <div className="special__img__border">
              <img
                src="./media/hot-drink.png"
                alt=""
                className="special__img"
              />
            </div>
            <h3 className="special__title">Hot Coffee</h3>
            <p className="special__description">
              Enjoy your coffee with some hot with true taste.
            </p>
          </div>
          <div className="special__group">
            <div className="special__img__border">
              <img
                src="./media/cupcakes-removebg-preview.png"
                alt=""
                className="special__img"
              />
            </div>
            <h3 className="special__title">Ice desserts</h3>
            <p className="special__description">
              Enjoy your dessert with some ice wtih true taste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;