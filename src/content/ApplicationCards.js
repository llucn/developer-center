import React, { useState, useEffect } from 'react';
import './carbon-style.scss';
import { Add } from '@carbon/icons-react';
import { Grid, Button, TextInput } from '@carbon/react';

const ApplicationCards = () => {
  return (
    <div>
      <Grid className="main-page">
        <TextInput
          labelText="Search"
          id="searchTextInput"
          placeholder="Input search text"
          width={80}
        />
        <Button>
          <Add size="24" />
          Example usage
        </Button>
      </Grid>
    </div>
  );
};
export default ApplicationCards;
