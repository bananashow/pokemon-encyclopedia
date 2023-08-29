import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
export const BasicWrap = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  padding: 0 60px;
  margin: 0 auto;
`;
