import React, { useEffect } from 'react'
import { Grid, Input, Button, makeStyles } from '@material-ui/core';
import { fetchContentData } from '../actions/fetching';
import { useDispatch } from 'react-redux';
import { UPDATE_AUTH_PASSWORD, UPDATE_AUTH_USERNAME } from '../actions/constants';

const Login = ({ isLoggedIn, loggedIn, controlledAuth }) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  // eslint-disable-next-line 

  const onClickSubmit = () =>
    dispatch(fetchContentData(controlledAuth))

  const onChangeUsername = (e) =>
    dispatch({ type: UPDATE_AUTH_USERNAME, payload: e.target.value })

  const onChangePassword = (e) =>
    dispatch({ type: UPDATE_AUTH_PASSWORD, payload: e.target.value })

  useEffect(() => {
    if (isLoggedIn) {
      loggedIn(true)
    }
  }, [isLoggedIn, loggedIn, controlledAuth])

  return (
    <Grid container spacing={3} className={classes.loginSection}>
      <Grid item>
        <Input value={controlledAuth.username} placeholder='username'
          onChange={(e) => onChangeUsername(e)} />
        <Input value={controlledAuth.password} placeholder='password' type='password'
          onChange={(e) => onChangePassword(e)} />
      </Grid>
      <Grid item>
        <Button onClick={onClickSubmit}>Submit</Button>
      </Grid>
    </Grid>
  )
}

export default Login

const useStyles = makeStyles((theme) => ({
  loginSection: {
    borderRadius: '.2em',
    backgroundColor: '#D2D2D2',
    position: "fixed",
    right: 25,
    width: 300,
    top: 108,
  },
}));