import styled from "styled-components";

export const HomePageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  color: white;
  background: grey;
`;

export const SideBarContainer = styled.div`
  width: 200px;
  position: absolute;
  right: 2.5%;
  top: 22%;
  text-align: right;
  display: flex;
  flex-direction: column;
`;

export const MenuItemContainer = styled.div`
  margin-bottom: 20px;
`;

export const DisplayContainer = styled.div`
  height: 50%;
  width: 47%;
  border: 4px solid #bc9c36;
  background-color: rgba(0, 0, 0, 0.2);
  text-align: left;
  position: relative;
  top: 22%;
  left: 5%;
  font-size: 2vw;
`;

export const DisplayInnerContainer = styled.div`
  margin-top: 9.5%;
  margin-left: 4.6%;
`;

export const DisplayBoxTitle = styled.div`
  background: #bc9c36;
  width: 40%;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftSideContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const TimeDateContainer = styled.div`
  color: #bc9c36;
  position: relative;
  top: 22%;
  left: 5%;
`;

export const BottomDescriptionContainer = styled.div`
  position: relative;
  top: 22%;
  left: 5%;
`;
