import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

function Todos(props) {
  return (
    <List>
        <ListItem>
            <ListItemText primary={props.text} />
        </ListItem>
    </List>
  )
}

export default Todos;
