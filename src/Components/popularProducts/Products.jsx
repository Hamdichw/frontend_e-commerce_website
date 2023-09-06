import Product from "./product";
import {popularProducts} from "../../Services/productsServices"
import styled from "styled-components";
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product data={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;