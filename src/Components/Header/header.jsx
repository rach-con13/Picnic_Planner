import React from "react";
import { Container } from "../../Styles/Elements/Container/Container";
import { HeadingLarge, SubHeading } from "../../Styles/Elements/Text/text";
import { HeaderSection } from "./header.style";

export default function Header(props) {
  return (
    <HeaderSection hasBG>
      <Container.Flex
        padding="1rem 0rem"
        width="lg"
        align="center"
        justify="space-between"
      >
        <HeadingLarge>Picnic Planner</HeadingLarge>
        <SubHeading>Rachael C</SubHeading>
      </Container.Flex>
    </HeaderSection>
  );
}
