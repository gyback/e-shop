import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  
  img {
    width: 30%;
  }
`

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`

export const Name = styled.span`
  font-size: 16px;

`
export const ButtonsContainer = styled.div`
display: flex;
    flex-direction: column;
    align-content: end;
    justify-content: space-around;
`

export const AddRemoveButton = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 30px;
  span {
    margin: auto;
    border: none;
    background-color:transparent;
    justify-content: center;  
  }
`  
    // .clear{
    //   margin-left: auto;
    // }
    
   