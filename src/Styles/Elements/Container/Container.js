import styled from "styled-components";
import { ContainerWidth } from "./ContainerUtil";

export const Container = styled.div`
  width: ${({ width }) => ContainerWidth(width)};
  margin: 0 auto;
  background: ${({ theme, hasBG }) => hasBG && theme.colors.primary.extraLight};
  padding: ${({ padding }) => padding && padding};
  margin-top: ${({ margin }) => margin && margin};
`;

export const Flex = styled(Container)`
  display: flex;
  align-items: ${({ align }) => (align ? align : "baseline")};
  justify-content: ${({ justify }) => (justify ? justify : "initial")};
`;

Container.Flex = Flex;
