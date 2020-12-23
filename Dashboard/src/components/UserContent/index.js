import React from "react";
import { observer } from "mobx-react-lite";
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
import UserAPI from "../../store/UserAPI";
import ClientsAPI from "../../store/ClientsAPI";

export const UserContent = observer(() => {
  const { currentUser } = UserAPI;
  const { clients } = ClientsAPI;
  return (
    <ContentContainer>
      <ContentTop>
        <ButtonContainer>
          <ButtonLeft></ButtonLeft>
          <ButtonRight></ButtonRight>
        </ButtonContainer>
        <div className="username">{`Hello ${
          currentUser.nickName ? currentUser.nickName : "User"
        }`}</div>
        <Search>
          <datalist id="search">
            {clients.map((item, index) => (
              <option key={index}>{item.name}</option>
            ))}
          </datalist>
          <LabelSearch htmlFor="search"></LabelSearch>
          <InputSearch type="search" placeholder="Search clients" id="search" list="search" />
        </Search>
      </ContentTop>
      <PeriodContainer>
        <PeriodTitle>Monthly stats</PeriodTitle>
        <PeriodButton type="button">change</PeriodButton>
      </PeriodContainer>
      <TopGraf />
    </ContentContainer>
  );
});
