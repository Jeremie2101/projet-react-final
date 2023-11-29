import React, { useState } from 'react';
import data from '../json/data.json';

const Products = () => {
  const [filter, setFilter] = useState('main-menu');

  return (
    <section className="products section" id="products">
      <div className="products__container container">
        <h2 className="section__title">
          Find delicious food and <br />
          choose what you love
        </h2>

        <ul className="products__filters">
  {['main-menu', 'coffee', 'desserts'].map((categoryFilter) => (
    <li
      key={categoryFilter}
      className={`products__item products__line ${
        filter === categoryFilter && 'active-product'
      }`}
      onClick={() => setFilter(categoryFilter)}
      data-filter={`.${categoryFilter}`}
    >
      <h3 className="products__title">{capitalizeFirstLetter(categoryFilter)}</h3>
      <span className="products__stock">{getProductCount(data, categoryFilter)} products</span>
    </li>
  ))}
</ul>

<div className="products__content grid">
  {data.categories.map((category) =>
    category.category === filter ? (
      <article key={category.id} className={`products__card ${filter}`}>
        <div className="products__shape">
          <img src={category.imageUrl} alt="" className="products__img" />
        </div>
        <div className="products__data">
          <h2 className="products__price">${category.price}</h2>
          <h3 className="products__name">{category.title}</h3>
          <button className="button products__button">
            <i className="bx bx-shopping-bag"></i>
          </button>
        </div>
      </article>
    ) : null
  )}
</div>
      </div>
    </section>
  );
};

 //Fonction utilitaire pour capitaliser la première lettre d'une chaîne
 function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
 }

// // Fonction utilitaire pour obtenir le nombre de produits d'une catégorie
function getProductCount(data, categoryFilter) {
  return data.categories.filter((category) => category.category === categoryFilter).length;}


export default Products;
