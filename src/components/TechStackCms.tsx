import React from 'react'
import { Grid, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import CmsTextFields from './CmsTextFields';
import SectionWrapper from './SectionWrapper';
import { Captions } from '../Cms';
import { useSelector, useDispatch } from 'react-redux';
import { rootT } from '../store';
import { NEW_ADDITION_TO_CMS_CONTENT } from '../actions/constants';

function TechStackCms() {
  const dispatch = useDispatch()
  const { cmsPortfolioContent } = useSelector((state: rootT) => state)
  const type = 'tech'

  const newAdditionOnClick = (props) => dispatch({ type: NEW_ADDITION_TO_CMS_CONTENT, payload: props })

  return (
    <Grid item>
      <Captions input1='Tech icon URL' input2='Tech video URL' input3='Name of tech' />
      {cmsPortfolioContent.tech.map((tec, index) =>
        <div key={index}>
          <SectionWrapper
            type={type}
            index={index}
            deleteBtnVisible={cmsPortfolioContent[type].length > 1}
          >
            <CmsTextFields
              arrOfTextFields={[
                {
                  textfieldValue: tec.icon,
                  placeholder: 'Tech icon URL',
                  indexInArray: 'icon'
                },
                {
                  textfieldValue: tec.video,
                  placeholder: 'Tech video URL',
                  indexInArray: 'video'
                },
                {
                  textfieldValue: tec.alt,
                  placeholder: 'Name of tech',
                  indexInArray: 'alt'
                }
              ]}
              index={index}
              type={type}
            />
          </SectionWrapper>
          {
            index === cmsPortfolioContent.tech.length - 1 &&
            <Button onClick={() => newAdditionOnClick('tech')}><AddIcon /></Button>
          }
        </div>
      )}
    </Grid>
  )
}

export default TechStackCms
