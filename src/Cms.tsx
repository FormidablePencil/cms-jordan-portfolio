import React, { useState } from 'react'
import { Grid, Typography, makeStyles, Container, TextareaAutosize } from '@material-ui/core'
import Login from './components/Login';
import { GridFlex } from './styles/customMaterialUiComp';
import ContentSection from './components/ContentSection';
import BioAndContacts from './components/BioAndContacts';
import TechStackCms from './components/TechStackCms';
import { CustomCmsTextField } from './components/CmsTextFields';
import { useSelector, useDispatch } from 'react-redux';
import { rootT } from './store';
import { ON_CHANGE_VALUE } from './actions/constants';

export const Captions = ({ input1, input2, input3 }: { input1, input2, input3?: string }) => {
  const classes = useStyles();
  const width = input3 ? { width: '32em' } : { width: '20em' }
  return (
    <GridFlex container item justify='space-around' style={width}>
      <Typography className={classes.caption} variant='caption'>{input1}</Typography>
      <Typography className={classes.caption} variant='caption'>{input2}</Typography>
      {input3 &&
        <Typography className={classes.caption} variant='caption'>{input3}</Typography>
      }
    </GridFlex>
  )
}

function Cms() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { cmsPortfolioContent, controlledAuth } = useSelector((state: rootT) => state)
  const classes = useStyles();
  const dispatch = useDispatch()

  const onChangeHandler = (e) => dispatch({
    type: ON_CHANGE_VALUE,
    payload: {
      type: 'introParagraph',
      index: null,
      input: 'paragraph',
      value: e.target.value,
    }
  })



  const loggedIn = (boolean) => setIsLoggedIn(boolean)

  return (
    <Container>
      <Grid spacing={5} container direction='column' className={classes.cmsBackground}>

        {/* //*========= Authentication ===========*/}
        <Login
          isLoggedIn={isLoggedIn}
          loggedIn={loggedIn}
          controlledAuth={controlledAuth}
        />

        {/* //*========= Intro Section ===========*/}
        <CustomCmsTextField
          textfieldValue={cmsPortfolioContent.tabSectionTitles[0].tabTitle}
          placeholder={''}
          indexInArray={0}
          type='tabSectionTitles'
          index={null}
        />
        <Grid item>
          <TextareaAutosize
            className={classes.textAreaLarge}
            rows={5}
            value={cmsPortfolioContent.introParagraph}
            placeholder='Paragraph...'
            onChange={onChangeHandler} />
        </Grid>

        {/* //*========= Tech Stack ===========*/}
        <CustomCmsTextField
          textfieldValue={cmsPortfolioContent.tabSectionTitles[1].tabTitle}
          placeholder={''}
          indexInArray={1}
          type='tabSectionTitles'
          index={null}
        />
        <TechStackCms />

        {/* //*========= Content Section ===========*/}
        <CustomCmsTextField
          textfieldValue={cmsPortfolioContent.tabSectionTitles[2].tabTitle}
          placeholder={''}
          indexInArray={2}
          type='tabSectionTitles'
          index={null}
        />
        <div style={{ marginLeft: '2em' }}>
          <ContentSection />
        </div>

        {/* //*========= Bio and Contacts ===========*/}
        <CustomCmsTextField
          textfieldValue={cmsPortfolioContent.tabSectionTitles[3].tabTitle}
          placeholder={''}
          indexInArray={3}
          type='tabSectionTitles'
          index={null}
        />
        <div style={{ marginLeft: '2em' }}>
          <BioAndContacts classes={classes} />
        </div>

        {/* //*========= Flaoting Fab Btn ===========*/}

      </Grid>
    </Container >
  )
}

export default Cms

const useStyles = makeStyles((theme) => ({
  cmsBackground: {
    backgroundColor: '#E8E8E8',
    width: '60em',
    marginTop: '2em',
    marginBottom: '2em',
    padding: '.2em'
  },

  caption: {
    color: '#1182B0'
  },
  largeCaption: {
    color: '#062F40',
    maxWidth: '10em',
    marginLeft: '.2em'
  },
  textAreaLarge: {
    width: '30em'
  },
  marginLeft: {
    marginLeft: '1em'
  }
}));
