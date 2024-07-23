import React, { useState, useEffect } from 'react';
import { Search } from '@carbon/icons-react';
import { Grid, Column, Link, Tile } from '@carbon/react';

const ApplicationCards = () => {
  return (
    <div>
      <Grid className="card-page">
        <Column lg={3} md={2} sm={1} className="card-page__r1">
          <Tile style={{ height: '200px', width: '200px' }}>
            <b>Delta Work Force for MAS</b>
            <br />
            <br />
            <br />
            <Link
              style={{ marginLeft: '12px' }}
              href="/#/formdesigner/workorder_list">
              Edit
            </Link>
          </Tile>
        </Column>
        <Column lg={3} md={2} sm={1} className="card-page__r1">
          <Tile style={{ height: '200px', width: '200px' }}>
            <b>Delta Work Force For Tririga</b>
            <br />
            <br />
            <br />
            <Link
              style={{ marginLeft: '12px' }}
              href="/#/formdesigner/workorder_list">
              Edit
            </Link>
          </Tile>
        </Column>
        <Column lg={3} md={2} sm={1} className="card-page__r1">
          <Tile style={{ height: '200px', width: '200px' }}>
            <b>Delta Work Force For SAP</b>
            <br />
            <br />
            <br />
            <Link
              style={{ marginLeft: '12px' }}
              href="/#/formdesigner/workorder_list">
              Edit
            </Link>
          </Tile>
        </Column>
        <Column lg={3} md={2} sm={1} className="card-page__r1">
          <Tile style={{ height: '200px', width: '200px' }}>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Link style={{ fontSize: 48 }}>+</Link>
            </div>
          </Tile>
        </Column>
      </Grid>
    </div>
  );
};
export default ApplicationCards;
