import React from "react";
import { HeadingExtraLarge } from "../../Styles/Elements/Text/text";
import { Main } from "./main.style";

export default function MainSection({ mainTitle, children }) {
  return (
    <Main width="lg">
      <HeadingExtraLarge>{mainTitle}</HeadingExtraLarge>
      {children}
    </Main>
  );
}
