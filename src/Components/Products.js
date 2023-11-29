import React, { useState } from 'react';
import data from '../json/data.json';

const Products = () => {
  const [filter, setFilter] = useState('main-menu');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrer les produits par catégorie
  const filteredByCategory = data.categories.filter(
    (category) => category.category === filter
  );

  // Filtrer les produits par titre dans la catégorie sélectionnée
  const filteredProducts = filteredByCategory.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="products section" id="products">
      <div className="products__container container">
        <h2 className="section__title">
          Find delicious food and <br />
          choose what you love
        </h2>

        <div className="products__search">
          <label htmlFor="search">SEARCH BY TITLE:</label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter title..."
          />
        </div>

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
              <span className="products__stock">
                {getProductCount(data, categoryFilter)} products
              </span>
            </li>
          ))}
        </ul>

        <div className="products__content grid">
          {filteredProducts.map((product) => (
            <article key={product.id} className={`products__card ${filter}`}>
              <div className="products__shape">
                <img src={product.imageUrl} alt="" className="products__img" />
              </div>
              <div className="products__data">
                <h2 className="products__price">${product.price}</h2>
                <h3 className="products__name">{product.title}</h3>
                <button className="button products__button">
                  <i className="bx bx-shopping-bag"></i>
                </button>
              </div>
            </article>

            
          ))}
        </div>
      </div>
    </section>
  );
};

// Fonction utilitaire pour capitaliser la première lettre d'une chaîne
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Fonction utilitaire pour obtenir le nombre de produits d'une catégorie
function getProductCount(data, categoryFilter) {
  return data.categories.filter(
    (category) => category.category === categoryFilter
  ).length;
}



export default Products;
