import styled from "styled-components";
import posed from "react-pose";

export const GridContainer = styled(
  posed.div({
    enter: { staggerChildren: 30 },
    exit: { staggerChildren: 30 }
  })
)`
  width: 100%;
  height: 83.7%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  border: 4px solid white;
  border-right: 0;
  border-left: 0;
  box-sizing: border-box;
`;

export const GridItem = styled(
  posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 10, opacity: 0 }
  })
)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid white;
  color: white;
  box-sizing: border-box;
  background-image: url(${props => props.backgroundImage});
`;

export const FocusedPortaitContainer = styled(
  posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  })
)`
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 5;
  grid-column-end: 8;
  transition: background-image 500ms;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 4px solid white;
  box-sizing: border-box;
  background-image: url(${props => props.backgroundImage});
  display: flex;
  align-items: flex-end;
`;

export const FocusedDescriptionContainer = styled(
  posed.div({
    enter: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 }
  })
)`
  border: 4px solid ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.gold};
  margin: 0 0 4.8611vh 2.1875vw;
  text-align: left;
`;

export const FocusedIconDescriptionContainer = styled(
  posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  })
)``;

export const GridIconOverlay = styled.div`
  height: 100%;
  width: 100%;
  transition: background-color 500ms;
  color: white;
  background-color: ${props => props.backgroundColor};
`;

export const Icon = styled.img`
  height: 50px;
  width: 50px;
`;
