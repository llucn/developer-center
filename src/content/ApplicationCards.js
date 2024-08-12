import React, { useState, useEffect } from 'react';
import { Add } from '@carbon/icons-react';
import {
  Grid,
  Column,
  Link,
  Tile,
  UnorderedList,
  ListItem,
} from '@carbon/react';

const ApplicationCards = () => {
  const [apps, setApps] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/application/')
      .then(response => response.json())
      .then(data => {
        console.log(data);

        setApps(data);

        // apps.forEach(app => {
        //   console.log(app);
        // })
        setIsLoading(false);
      });
  }, []);

  function Cards(props) {
    const appCards = apps.map(app => (
      <Column lg={3} md={2} sm={1} className="card-page__r1">
        <Tile style={{ height: '240px', width: '240px' }}>
          <b>{app.name}</b>
          <p>{app.description}</p>
          <Link
            style={{ marginLeft: '12px' }}
            href="/#/application/"
            target="_blank">
            Edit
          </Link>
        </Tile>
      </Column>
    ));

    return (
      <Grid className="card-page">
        {appCards}

        <Column lg={3} md={2} sm={1} className="card-page__r1">
          <Tile style={{ height: '240px', width: '240px' }}>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Link style={{ fontSize: 48 }} href="/#/appcreator">
                <Add size={48} />
              </Link>
            </div>
          </Tile>
        </Column>
      </Grid>
    );
  }
  return (
    <div>{isLoading ? <div>Loading...</div> : <Cards items={apps} />}</div>
  );
};
export default ApplicationCards;
