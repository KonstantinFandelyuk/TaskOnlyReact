import React, { useContext } from 'react';
import SearchItem from './SearchItem/index';
import { Search } from './style';
import { Context } from '../../../../context/Context';

function SearchList() {
  const { searcDataList } = useContext(Context);
  return searcDataList.length > 0 ? (
    <Search>
      <ul>
        {searcDataList.map((item, index) => (
          <SearchItem item={item} key={index} />
        ))}
      </ul>
    </Search>
  ) : null;
}

export default SearchList;
