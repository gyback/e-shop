import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CategoryContainer = styled.div`
display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`

export const ProductsContainer = styled.div`
  display: grid;
  
  grid-template-columns: repeat(auto-fill, minmax(191px, auto));
  column-gap: 20px;
  row-gap: 40px;
`