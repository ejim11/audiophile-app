import { useParams } from "react-router-dom";

const Category = () => {
  const params = useParams();
  console.log(params);

  return <div>{params.categoryId}</div>;
};

export default Category;
