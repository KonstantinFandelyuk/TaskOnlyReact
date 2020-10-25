import React from 'react';
import { Container, NextPageButton, PrevPageButton } from './style';

function Paginator({ nextPage, page, PrevPage }) {
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
