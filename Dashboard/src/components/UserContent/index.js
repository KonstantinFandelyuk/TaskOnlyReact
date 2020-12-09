import React from "react";
import {
  ContentContainer,
  ContentTop,
  InputSearch,
  LabelSearch,
  Search,
  ButtonContainer,
  ButtonLeft,
  ButtonRight,
  PeriodContainer,
  PeriodTitle,
  PeriodButton,
} from "./style";
import { TopGraf } from "./TopGraf";

export const UserContent = () => {
  return (
    <ContentContainer>
      <ContentTop>
        <ButtonContainer>
          <ButtonLeft></ButtonLeft>
          <ButtonRight></ButtonRight>
        </ButtonContainer>
        <Search>
          <LabelSearch htmlFor="search"></LabelSearch>
          <InputSearch type="search" id="search" placeholder="Search" />
        </Search>
      </ContentTop>
      <PeriodContainer>
        <PeriodTitle>Monthly stats</PeriodTitle>
        <PeriodButton type="button">change</PeriodButton>
      </PeriodContainer>
      <TopGraf />
    </ContentContainer>
  );
};
