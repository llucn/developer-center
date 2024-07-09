import React, { useState, useEffect } from 'react';
import { Search } from '@carbon/icons-react';
import { Grid, Column, Button, TextInput } from '@carbon/react';

const ApplicationCards = () => {
  return (
    <div>
      <Grid className="card-page">
        <Column lg={4} md={2} sm={1} className="card-page__r1">
          <TextInput
            id="searchTextInput"
            placeholder="Input search text"
            width={80}
          />
        </Column>
        <Column lg={4} md={2} sm={1} className="card-page__r1">
          <Button>
            Search &nbsp;
            <Search />
          </Button>
        </Column>
      </Grid>
    </div>
  );
};
export default ApplicationCards;
