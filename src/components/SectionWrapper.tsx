import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { DELETE_CERTAIN_PORTFOLIO_ITEM } from '../actions/constants'

function SectionWrapper(props: { children, type, index, deleteBtnVisible }) {
  const { children, type, index, deleteBtnVisible } = props
  const dispatch = useDispatch()

  const deleteItemOnClick = (props) => dispatch({ type: DELETE_CERTAIN_PORTFOLIO_ITEM, payload: props })

  return (
    <Grid container direction='row'>
      <Grid item>
        {children}
      </Grid>
      {deleteBtnVisible &&
        <Button onClick={() => deleteItemOnClick({ type, itemInArr: index })}>Delete</Button>
      }
    </Grid>
  )
}

export default SectionWrapper
