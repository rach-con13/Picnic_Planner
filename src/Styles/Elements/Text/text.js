import styled from "styled-components";

export const HeadingExtraLarge = styled.h1`
  font-size: 1.424rem;
  color: ${({ theme }) => theme.colors.primary.extraDark};
`;
export const HeadingLarge = styled.h4`
  font-size: 1.266rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.extraDark};
`;

export const SubHeading = styled.h5`
  font-size: 1.125rem;
  color: ${({ theme, color }) => theme.colors.primary[color]};
`;

export const BodyText = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

export const Caption = styled.h6`
  font-size: 0.889rem;
  color: ${({ theme, accent }) =>
    accent ? theme.colors.secondary.base : theme.colors.primary.dark};
`;
