import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "aaa",
    image: "https://en.pimg.jp/040/895/779/1/40895779.jpg",
    rating: 4,
  },
  {
    id: 2,
    name: "bbb",
    image: "https://en.pimg.jp/040/895/779/1/40895779.jpg",
    rating: 4.3,
  },
  {
    id: 3,
    name: "ccc",
    image: "https://en.pimg.jp/040/895/779/1/40895779.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "ddd",
    image: "https://en.pimg.jp/040/895/779/1/40895779.jpg",
    rating: 3.5,
  },
  {
    id: 5,
    name: "eee",
    image: "https://en.pimg.jp/040/895/779/1/40895779.jpg",
    rating: 4.1,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
