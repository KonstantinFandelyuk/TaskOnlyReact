import React from "react";
import SearchItem from "./SearchItem/index";
import { Search } from "./style";

function SearchList({ searcDataList, openModalScreen }) {
  console.log("searcDataList :>> ", searcDataList);
  return (
    <Search list={searcDataList.length === 0}>
      <ul>
        {searcDataList &&
          searcDataList.map((item, index) => (
            <SearchItem item={item} key={index} openModalScreen={openModalScreen} />
          ))}
      </ul>
    </Search>
  );
}

export default SearchList;
