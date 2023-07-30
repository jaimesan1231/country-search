import { useEffect, useState } from "react";
import { getContinentImage } from "../../api";
import "./FilterItem.css";

const FitlerItem = ({ continent, handleFilter, selected }) => {
  const [urlImage, setUrlImage] = useState();
  useEffect(() => {
    const handleGetImage = async () => {
      await getContinentImage(continent.name, (image) => {
        setUrlImage(image);
      });
    };
    handleGetImage();
  }, []);

  const handleSelected = () => {
    if (!selected) {
      handleFilter(continent.code, "add");
    } else {
      handleFilter(continent.code, "remove");
    }
  };
  return (
    <li className="filter-item">
      <img
        onClick={handleSelected}
        src={urlImage}
        alt=""
        className={`filter-item__image ${selected && "filter-item_selected"}`}
      />
      <p className="filter-item__title">{continent.name}</p>
    </li>
  );
};

export default FitlerItem;
