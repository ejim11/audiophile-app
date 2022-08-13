import ProductItemBox from "../UI/ProductItemsBox/ProductItemBox";

const getObjectPropValue = (obj) => {
  let img;
  for (const key in obj) {
    img = obj[key];
    return img;
  }

  return img;
};

const structureData = (data) => {
  const dataComponentList = data.map((item, i) => (
    <ProductItemBox
      key={i}
      newProduct={item.newProduct}
      className={`${
        (i + 1) % 2 === 0 ? "img-first-auto-box" : "text-first-auto-box"
      } ${i === 0 ? "first-div" : ""}`}
      title={item.title}
      text={item.text}
      img={getObjectPropValue(item.imgDesktop)}
      alt={item.alt}
    />
  ));

  return dataComponentList;
};

export default structureData;
