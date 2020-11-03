import React, { useContext } from 'react';
import SearchItem from './SearchItem/index';
import { Search } from './style';
import { Context } from '../../../../context/Context';

function SearchList() {
  const { searcDataList } = useContext(Context);
  return (
    <Search>
      {/* list={searcDataList.length === 0} */}
      <ul>
        {searcDataList &&
          searcDataList.map((item, index) => <SearchItem item={item} key={index} />)}
      </ul>
    </Search>
  );
}

export default SearchList;
