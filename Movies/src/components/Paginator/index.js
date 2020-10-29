import React, { useContext } from 'react';
import { Container, NextPageButton, PrevPageButton } from './style';
import { Context } from '../../context/Context';

function Paginator() {
  const { nextPage, PrevPage } = useContext(Context);
  return (
    <Container>
      <PrevPageButton type="button" onClick={PrevPage}>
        Предидущая страница
      </PrevPageButton>
      <NextPageButton type="button" onClick={nextPage}>
        Следующая страница
      </NextPageButton>
    </Container>
  );
}

export default Paginator;
