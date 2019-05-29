import React from "react";
import styles from "./MenuItem.module.scss";
import PropTypes from "prop-types";

const MenuItem = ({ image, name, price, ingredients }) => {
  
  const ImageTag = image ? 'img' : 'div';
  
  return (
    <li className={styles.wrapper}>
      <ImageTag className={styles.image} src={image} alt={name} />
      <div>
        <h2 className={styles.menuItem__title}>
          {name}
          <span className={styles.menuItem__price}>
            <span className={styles.menuItem__dots}> . . . . . </span>
            {price}
          </span>
        </h2>
        <p className={styles.menuItem__ingredients}>{ingredients}</p>
      </div>
    </li>
  );
};

export default MenuItem;

MenuItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  ingredients: PropTypes.string
};

MenuItem.defaultProps = {
  image: null
};
