import React from 'react'
import { Grid, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import SectionWrapper from './SectionWrapper';
import CmsTextFields, { CustomCmsTextField } from './CmsTextFields';
import { Captions } from '../Cms';
import { useDispatch, useSelector } from 'react-redux';
// import { NEW_ADDITION_TO_CMS_CONTENT } from '../actions/constants'
import { rootT } from '../store';
import { NEW_ADDITION_TO_CMS_CONTENT } from '../actions/constants';

function ContentSection() {
  const types = {
    moreTech: 'moreTech',
    photoshop: 'photoshop',
    videoProjects: 'videoProjects',
  }
  const { cmsPortfolioContent } = useSelector((state: rootT) => state)
  const dispatch = useDispatch()
  const newAdditionOnClick = (props) => dispatch({ type: NEW_ADDITION_TO_CMS_CONTENT, payload: props })
  return (
    <>
     {/* //*========= Technologies Section ===========*/}
     <CustomCmsTextField
        textfieldValue={cmsPortfolioContent.tabSectionTitles[2].subSections[0].tabTitle}
        placeholder={''}
        indexInArray={2}
        deeperIndexInArray={0}
        type='tabSectionTitles'
        index={null}
      />
      <Grid item>
        <Captions input1='Tech icon URL' input2='Name of tech' />
        {cmsPortfolioContent.photoshop.map((image, index) =>
          <div key={index}>
            <SectionWrapper
              type={types.photoshop}
              index={index}
              deleteBtnVisible={cmsPortfolioContent[types.photoshop].length > 1}
            >
              <CmsTextFields
                arrOfTextFields={[
                  {
                    textfieldValue: image.url,
                    placeholder: 'Tech icon URL',
                    indexInArray: 'url'
                  },
                  {
                    textfieldValue: image.alt,
                    placeholder: 'Name of tech',
                    indexInArray: 'alt'
                  }
                ]}
                index={index}
                type={types.photoshop}
              />
            </SectionWrapper>
            {index === cmsPortfolioContent.photoshop.length - 1 &&
              <Button onClick={() => newAdditionOnClick(types.photoshop)}><AddIcon /></Button>}
          </div>
        )}
      </Grid>
      
      {/* //*========= Videos Section ===========*/}
      <CustomCmsTextField
        textfieldValue={cmsPortfolioContent.tabSectionTitles[2].subSections[1].tabTitle}
        placeholder={''}
        indexInArray={2}
        deeperIndexInArray={1}
        type='tabSectionTitles'
        index={null}
      />
      <Grid item>
        <Captions input1='Image URL' input2='Title' />
        {cmsPortfolioContent.videoProjects.map((image, index) =>
          <div key={index}>
            <SectionWrapper
              type={types.videoProjects}
              index={index}
              deleteBtnVisible={cmsPortfolioContent[types.videoProjects].length > 1}
            >
              <CmsTextFields
                arrOfTextFields={[
                  {
                    textfieldValue: image.url,
                    placeholder: 'Image URL',
                    indexInArray: 'url'
                  },
                  {
                    textfieldValue: image.alt,
                    placeholder: 'Title',
                    indexInArray: 'alt'
                  }
                ]}
                index={index}
                type={types.videoProjects}
              />
            </SectionWrapper>
            {index === cmsPortfolioContent.videoProjects.length - 1 &&
              <Button onClick={() => newAdditionOnClick(types.videoProjects)}><AddIcon /></Button>}
          </div>
        )}
      </Grid>

     
      {/* //*========= Images Section ===========*/}
      <CustomCmsTextField
        textfieldValue={cmsPortfolioContent.tabSectionTitles[2].subSections[2].tabTitle}
        placeholder={''}
        indexInArray={2}
        deeperIndexInArray={2}
        type='tabSectionTitles'
        index={null}
      />
      <Grid item>
        <Captions input1='Tech icon URL' input2='Title' />
        {cmsPortfolioContent.moreTech.map((tec, index) =>
          <div key={index}>
            <SectionWrapper
              type={types.moreTech}
              index={index}
              deleteBtnVisible={cmsPortfolioContent[types.moreTech].length > 1}
            >
              <CmsTextFields
                arrOfTextFields={[
                  {
                    textfieldValue: tec.icon,
                    placeholder: 'Tech icon URL',
                    indexInArray: 'icon'
                  },
                  {
                    textfieldValue: tec.alt,
                    placeholder: 'Title',
                    indexInArray: 'alt'
                  }
                ]}
                index={index}
                type={types.moreTech}
              />
            </SectionWrapper>
            {index === cmsPortfolioContent.moreTech.length - 1 &&
              <Button onClick={() => newAdditionOnClick(types.moreTech)}><AddIcon /></Button>}
          </div>
        )
        }
      </Grid>

      
    </>
  )
}

export default ContentSection
