import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  @media screen and (max-width: 800px) {
    right: 10px;
  }
`;

export const CartItemsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;
