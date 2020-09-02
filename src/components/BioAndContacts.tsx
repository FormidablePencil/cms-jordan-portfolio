import React from 'react'
import { Grid } from '@material-ui/core'
import { CustomCmsTextField } from './CmsTextFields'
import { useSelector } from 'react-redux'
import { rootT } from '../store'
import { Captions } from '../Cms';

function BioAndContacts({ classes }) {
  const type = 'tabSectionTitles'
  const subTypes = { bio: 'bio', contacts: 'contacts' }
  const { cmsPortfolioContent } = useSelector((state: rootT) => state)
  // const { onChangeValue, portfolioData } = useModifyContent()
  return (
    <>
      {/* //*========= Bio ===========*/}
      <CustomCmsTextField
        textfieldValue={cmsPortfolioContent.tabSectionTitles[3].subSections[0].tabTitle}
        placeholder=''
        deeperIndexInArray={0}
        indexInArray={3}
        type={type}
        index
      />

      <Grid item className={classes.marginLeft}>
        <Captions input1='Title' input2='Paragraph' />
        <CustomCmsTextField
          textfieldValue={cmsPortfolioContent.bio.title}
          placeholder='Title'
          indexInArray='title'
          type={subTypes.bio}
          index={null}
        />
        <CustomCmsTextField
          textfieldValue={cmsPortfolioContent.bio.paragraph}
          placeholder='Bio paragraph'
          indexInArray='paragraph'
          type={subTypes.bio}
          index={null}
        />
      </Grid>


      {/* //*========= Contacts ===========*/}
      <CustomCmsTextField
        textfieldValue={cmsPortfolioContent.tabSectionTitles[3].subSections[1].tabTitle}
        placeholder={''}
        indexInArray={3}
        deeperIndexInArray={1}
        type={type}
        index={null}
      />
      <Grid item container direction='column' className={classes.marginLeft}>
        <Grid item>
          <CustomCmsTextField
            textfieldValue={cmsPortfolioContent.contacts.email}
            placeholder='Email'
            indexInArray='email'
            type={subTypes.contacts}
            index={null}
          />
        </Grid>
        <Grid item>
          <CustomCmsTextField
            textfieldValue={cmsPortfolioContent.contacts.linkedin}
            placeholder='Linkedin'
            indexInArray='linkedin'
            type={subTypes.contacts}
            index={null}
          />
        </Grid>
        <Grid item>
          <CustomCmsTextField
            textfieldValue={cmsPortfolioContent.contacts.github}
            placeholder='Github'
            indexInArray='github'
            type={subTypes.contacts}
            index={null}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default BioAndContacts
