import React, { useState, useEffect } from 'react';
import { Button } from '@carbon/react';
import { Add } from '@carbon/icons-react';

const CarbonSample = () => {
  return (
    <div>
      <div>Carbon Sample</div>
      <Button>
        <Add size="24" />
        Example usage
      </Button>
    </div>
  );
};
export default CarbonSample;
