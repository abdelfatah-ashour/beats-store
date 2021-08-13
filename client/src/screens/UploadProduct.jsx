import React, {useState} from "react";
import "../assets/css/UploadProduct.css";
import defaultAxios from "../utilities/defaultAxios.js";
import SEO from "../components/SEO/SEO.jsx";

export default function UploadProduct() {
  const [infoProduct, setInfoProduct] = useState({
    name: "",
    category: "",
    productType: "",
    color: "",
    price: "",
    qty: "",
    material: "",
    brand: "",
    size: "",
  });

  const [Files, setFiles] = useState({
    img1: null,
    img2: null,
    img3: null,
    img4: null,
  });

  const {name, category, brand, color, material, price, productType, size} =
    infoProduct;

  const handleChange = e => {
    setInfoProduct({...infoProduct, [e.target.name]: e.target.value});
  };

  const handleSelectImages = e => {
    setFiles({
      ...Files,
      [e.target.name]: e.target.value,
    });
  };

  const checkValidForm = () => {
    const check =
      name.trim() &&
      category.trim() &&
      brand.trim() &&
      color.trim() &&
      material.trim() &&
      price.trim() &&
      productType.trim() &&
      size.trim();

    if (check) {
      return true;
    } else {
      return false;
    }
  };

  const submitProducts = () => {
    try {
      const result = checkValidForm();
      if (result) {
        defaultAxios
          .post("/product/create", {
            ...infoProduct,
            productImages: [Files.img1, Files.img2, Files.img3, Files.img4],
          })
          .then(({data}) => {
            alert(data.message);
          })
          .catch(error => {
            throw new Error(error.message);
          });
      } else {
        throw new Error("invalid product");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SEO title="Upload Product">
      <div className="upload-products">
        <div className="wrapper-upload-products">
          <h3>upload product</h3>
          <div className="group-control main-details">
            <div className="one-item">
              <div className="group-control">
                <label htmlFor="name">name product</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name of product"
                  onChange={handleChange}
                />
              </div>

              <div className="group-control">
                <label htmlFor="category">category</label>
                <select
                  name="category"
                  id="category"
                  defaultValue="DEFAULT"
                  onChange={handleChange}
                >
                  <option value="DEFAULT">select one Category...</option>
                  <option value="wireless">wireless</option>
                  <option value="noise isolated">noise isolated</option>
                  <option value="noise-cancelling">noise-cancelling</option>
                  <option value="sports EarBud">sports EarBud</option>
                </select>
              </div>
              {/* container of group control */}
              <div className="container-group-control">
                <div className="group-control">
                  <label htmlFor="productType">product type</label>
                  <select
                    name="productType"
                    id="productType"
                    onChange={handleChange}
                    defaultValue="DEFAULT"
                  >
                    <option value="DEFAULT">choose product type</option>
                    <option value="HeadPhone">HeadPhone</option>
                  </select>
                </div>

                <div className="group-control">
                  <label htmlFor="material">material</label>
                  <select
                    name="material"
                    id="material"
                    defaultValue="DEFAULT"
                    onChange={handleChange}
                  >
                    <option value="DEFAULT">choose material</option>
                    <option value="fiber">fiber</option>
                    <option value="plastic">plastic</option>
                    <option value="silicon">silicon</option>
                  </select>
                </div>

                <div className="group-control">
                  <label htmlFor="size">size</label>
                  <select
                    name="size"
                    id="size"
                    defaultValue="DEFAULT"
                    onChange={handleChange}
                  >
                    <option value="DEFAULT">choose size</option>
                    <option value="2.5">2.5</option>
                    <option value="3.5">3.5</option>
                    <option value="12">12</option>
                    <option value="12.5">12.5</option>
                    <option value="13">13</option>
                    <option value="13.5">13.5</option>
                  </select>
                </div>

                <div className="group-control">
                  <label htmlFor="brand">brand</label>
                  <select
                    name="brand"
                    id="brand"
                    defaultValue="DEFAULT"
                    onChange={handleChange}
                  >
                    <option value="DEFAULT">choose material</option>
                    <option value="arc">ARC</option>
                    <option value="Autofy">Autofy</option>
                    <option value="Beat">Beat</option>
                    <option value="Nemu">Nemu</option>
                  </select>
                </div>

                <div className="group-control">
                  <label htmlFor="color">color</label>
                  <select
                    name="color"
                    id="color"
                    defaultValue="DEFAULT"
                    onChange={handleChange}
                  >
                    <option value="DEFAULT">choose color</option>
                    <option value="red">red</option>
                    <option value="black">black</option>
                    <option value="white">white</option>
                    <option value="gray">gray</option>
                    <option value="beige">beige</option>
                    <option value="blue">blue</option>
                    <option value="lightblue">lightblue</option>
                  </select>
                </div>

                <div className="group-control">
                  <label htmlFor="price">price</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    onChange={handleChange}
                  />
                </div>

                <div className="group-control">
                  <label htmlFor="qty">qty</label>
                  <input
                    type="number"
                    name="qty"
                    id="qty"
                    onChange={handleChange}
                  />
                </div>

                <div className="group-control">
                  <label htmlFor="productImages">Product Images</label>
                  <input
                    type="text"
                    name="img1"
                    placeholder="#1 required"
                    onChange={handleSelectImages}
                  />
                  <input
                    type="text"
                    name="img2"
                    placeholder="#2 required"
                    onChange={handleSelectImages}
                  />
                  <input
                    type="text"
                    name="img3"
                    placeholder="#3 required"
                    onChange={handleSelectImages}
                  />
                  <input
                    type="text"
                    name="img4"
                    placeholder="#4 required"
                    onChange={handleSelectImages}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="group-control submitting">
            <button onClick={submitProducts}>submit</button>
          </div>
        </div>
      </div>
    </SEO>
  );
}
