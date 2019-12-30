import styled from "styled-components";
import posed from "react-pose";

export const AppContainer = styled.div`
  height: 100vh;
  text-align: center;
`;

export const RouteContainer = styled(
  posed.div({
    enter: { opacity: 1, delay: 300, beforeChildren: true },
    exit: { opacity: 0 }
  })
)`
  height: 100%;
  width: 100%;
`;
