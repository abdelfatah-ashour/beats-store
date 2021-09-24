import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors, materials, brands, sizes } from "../../utilities/dataUi.json";
import { FETCH_FILTER, RESET_FILTER } from "../../Redux/slices/filterSlice";

export default function SpecificFilter() {
  const { products } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const [currentFilter, setCurrentFilter] = useState({});

  const handleClearFilter = () => {
    setCurrentFilter({});
    dispatch(RESET_FILTER());
  };

  const handleChangeFilter = (e) => {
    setCurrentFilter({
      [e.target.name]: e.target.value,
    });

    const result = products.filter((item) => {
      return (
        item[e.target.name.toString().toLowerCase()] ===
        e.target.value.toString().toLowerCase()
      );
    });

    dispatch(FETCH_FILTER(result));
  };

  const handleToggleFilter = () => {
    const filterElem = document.getElementById("filter");
    filterElem.classList.toggle("toggleFilter");
  };

  return (
    <div className="specificFilter" id="filter">
      <button type="button" className="btn-close" onClick={handleToggleFilter}>
        X
      </button>

      <div className="sub-filter">
        <h4>color</h4>
        <ul className="list-group" id="list-colors">
          {colors.map((color, i) => {
            return (
              <li className="list-group-item" key={i}>
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value={color}
                  aria-label="..."
                  id={color}
                  name="color"
                  checked={
                    currentFilter[Object.keys(currentFilter)[0]] === color
                  }
                  onChange={handleChangeFilter}
                />
                <label htmlFor={color}>{color}</label>
                <span>
                  ({products.filter((item) => item.color === color).length})
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="sub-filter">
        <h4>material</h4>
        <ul className="sub-filter" id="list-materials">
          {materials.map((material) => {
            return (
              <li className="list-group-item" key={material}>
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value={material}
                  aria-label="..."
                  id={material}
                  name="material"
                  onChange={handleChangeFilter}
                  checked={
                    currentFilter[Object.keys(currentFilter)[0]] ===
                    material.toLowerCase()
                  }
                />
                <label htmlFor={material}>{material}</label>
                <span>
                  (
                  {products.filter((item) => item.material === material).length}
                  )
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="sub-filter">
        <h4>product type</h4>
        <ul className="sub-filter" id="list-sizes">
          {sizes.map((size) => {
            return (
              <li className="list-group-item" key={size}>
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value={size}
                  aria-label={size}
                  id={size}
                  name="size"
                  checked={
                    currentFilter[Object.keys(currentFilter)[0]] ===
                    size.toString().toLowerCase()
                  }
                  onChange={handleChangeFilter}
                />
                <label htmlFor={size}>{size} mm</label>
                <span>
                  ({products.filter((item) => item.size === size).length})
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sub-filter">
        <h4>brand</h4>
        <ul className="sub-filter" id="list-brands">
          {brands.map((brand) => {
            return (
              <li className="list-group-item" key={brand}>
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value={brand}
                  aria-label={brand}
                  id={brand}
                  name="brand"
                  checked={
                    currentFilter[Object.keys(currentFilter)[0]] ===
                    brand.toLowerCase()
                  }
                  onChange={handleChangeFilter}
                />
                <label htmlFor={brand}>{brand}</label>
                <span>
                  (
                  {
                    products.filter(
                      (item) => item.brand.toLowerCase() === brand.toLowerCase()
                    ).length
                  }
                  )
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <button onClick={handleClearFilter} className="clearFilter">
        clear filter
      </button>
    </div>
  );
}
