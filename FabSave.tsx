import React from 'react'

function FabSave() {
  return (
    <div>
      <Grid item>
        <Button className={
          portfolioDataChanged === 'err' ? classes.saveContentBtnErr
            : portfolioDataChanged ? classes.saveContentBtn
              : classes.saveContentBtnStandby
        }
          variant='contained'
          onClick={() => onClickSubmit()}
        >
          {portfolioDataChanged === 'err' ? '!' : portfolioDataChanged ? 'Save' : 'Saved'}
        </Button>
      </Grid>

    </div>
  )
}

export default FabSave
