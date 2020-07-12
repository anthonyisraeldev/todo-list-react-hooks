import React from 'react';
import { Badge, withStyles, Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './CountTodos.styles.css';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

function CountTodos({ todos }) {
  return (
    <div className="box-count-todos">
      <hr />
      <Button
        variant="outlined"
        color="primary"
      >
        <StyledBadge badgeContent={ todos.length ? todos.length  : '0'  } color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </Button>
    </div>
  )
}

export default CountTodos
