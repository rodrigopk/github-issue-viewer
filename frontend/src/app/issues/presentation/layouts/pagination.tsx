import React from 'react';

import { Button, Center } from '../../../../libs/ui';

const ITEMS_PER_PAGE = 30;

export const Pagination: React.FC<{
  numberOfItems: number;
  page: number;
  onUpdatePage: Function;
}> = ({ numberOfItems, page, onUpdatePage }) => {
  const increasePage = () => {
    if (page * ITEMS_PER_PAGE < numberOfItems) {
      onUpdatePage(page + 1);
    }
  };

  const decreasePage = () => {
    if (page > 1) {
      onUpdatePage(page - 1);
    }
  };

  return (
    <Center mt={8}>
      <Button width="100px" disabled={page <= 1} onClick={decreasePage}>
        Previous
      </Button>
      <Button
        width="100px"
        disabled={page * ITEMS_PER_PAGE >= numberOfItems}
        onClick={increasePage}>
        Next
      </Button>
    </Center>
  );
};
