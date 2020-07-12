import React from 'react';
import { Typography } from '@material-ui/core';

function HeroTitle({ title }) {
  return (
    <div className="py-5">
      <h1 style={{textAlign: 'center'}}>
        <Typography style={{ padding: 16 }} variant="h4">
          <span role="img" aria-label="Icon">⚡</span> { title } <span role="img" aria-label="Icon">🎣</span>
        </Typography>
      </h1>
    </div>
  )
}

export default HeroTitle;
