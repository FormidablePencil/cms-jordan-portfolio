import React from 'react'
import { Button } from '@material-ui/core'

const DeleteBtn = ({ visible, type, index, deleteItemOnClick }) =>
  <>
    {visible &&
      <Button onClick={() => deleteItemOnClick({ type, itemInArr: index })}>Delete</Button>
    }
  </>

export default DeleteBtn
