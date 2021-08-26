import styled from "styled-components";
import { Container } from "../../Styles/Elements/Container/Container";

export const Main = styled(Container).attrs({
  as: "main",
})`
  margin-top: 3rem;
  background: none;
  font-weight: 700;
  text-align: left;
`;
