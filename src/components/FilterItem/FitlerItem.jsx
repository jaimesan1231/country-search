import { useEffect, useState } from "react";
import "./FilterItem.css";

const FitlerItem = ({ continent, handleFilter }) => {
  const [urlImage, setUrlImage] = useState();
  const [selected, setSelected] = useState(true);
  useEffect(() => {
    const getImage = async () => {
      try {
        const res = await fetch(
          `https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${
            continent.name
          }&image_type=photo&per_page=3`
        );
        const data = await res.json();
        setUrlImage(data.hits[1].webformatURL);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getImage();
  }, []);
  useEffect(() => {
    console.log("primera vez");
    if (selected) {
      handleFilter(continent.code, "add");
    } else {
      handleFilter(continent.code, "remove");
    }
    return () => {
      handleFilter(continent.code, "remove");
    };
  }, [selected]);
  return (
    <li className="filter-item">
      <img
        onClick={() => setSelected(!selected)}
        src={urlImage}
        alt=""
        className={`filter-item__image ${selected && "filter-item_selected"}`}
      />
      <p className="filter-item__title">{continent.name}</p>
    </li>
  );
};

export default FitlerItem;
