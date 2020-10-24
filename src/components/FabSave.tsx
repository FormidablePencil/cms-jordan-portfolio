import { Button, Grid, makeStyles } from '@material-ui/core'
import React, { useEffect, useRef } from 'react'
import { updateContent } from '../actions/fetching';
import { useSelector, useDispatch } from 'react-redux'
import { rootT } from '../store'
import { useGetRawCrystalData } from 'parallax-effect-crystals';
import { READY_TO_SAVE } from '../actions/constants';

function FabSave() {
  const classes = useStyles();
  const { cmsPortfolioContent, controlledAuth, readyToSaveToDb } = useSelector((state: rootT) => state)
  const rawCrytal = useGetRawCrystalData()
  const renderCount = useRef(0)
  const dispatch = useDispatch()
console.log(readyToSaveToDb, 'readyToSaveToDb');
  useEffect(() => {
    if (renderCount.current === 1)  //when page loads the state won't be toggled
      dispatch({ type: READY_TO_SAVE, payload: true })

    else renderCount.current = 1
  }, [cmsPortfolioContent, dispatch])


  const onClickSubmit = async () => {
    const updated = await updateContent(cmsPortfolioContent, rawCrytal, controlledAuth)
    if (updated)
      dispatch({ type: READY_TO_SAVE, payload: false })
    else
      dispatch({ type: READY_TO_SAVE, payload: 'err' })
  }


  return (
    <div>
      <Grid item>
        <Button className={
          readyToSaveToDb === 'err' ? classes.saveContentBtnErr
            : readyToSaveToDb ? classes.saveContentBtn
              : classes.saveContentBtnStandby
        }
          variant='contained'
          onClick={() => onClickSubmit()}
        >
          {readyToSaveToDb === 'err' ? '!' : readyToSaveToDb ? 'Save' : 'Saved'}
        </Button>
      </Grid>

    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  saveContentBtn: {
    backgroundColor: 'green',
    position: "fixed",
    bottom: '1em',
    right: '1em',
  },
  saveContentBtnStandby: {
    backgroundColor: 'grey',
    position: "fixed",
    bottom: '1em',
    right: '1em',
  },
  saveContentBtnErr: {
    backgroundColor: 'yellow',
    position: "fixed",
    bottom: '1em',
    right: '1em',
  },
}));

export default FabSave
