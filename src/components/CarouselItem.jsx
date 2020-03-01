import React from "react";
import { connect } from "react-redux";
import { setFavorite, deleteFavorite } from "../actions";
import "../assets/styles/components/CarouselItem.scss";
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import removeIcon from "../assets/static/remove-icon.png";
import PropTypes from "prop-types";

const CarouselItem = props => {
  const { id, title, year, contentRating, duration, cover, isMyList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({ id, title, year, contentRating, duration, cover });
  };
  const handleDeleteFavorite = itemId => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={playIcon}
            alt="Play Icon"
          />

          {isMyList ? (
            <img
              className="carousel-item__details--img"
              src={removeIcon}
              onClick={() => handleDeleteFavorite(id)}
              alt="Remove Icon"
            />
          ) : (
            <img
              className="carousel-item__details--img"
              src={plusIcon}
              onClick={handleSetFavorite}
              alt="Plus Icon"
            />
          )}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  cover: PropTypes.string
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
};

export default connect(null, mapDispatchToProps)(CarouselItem);
