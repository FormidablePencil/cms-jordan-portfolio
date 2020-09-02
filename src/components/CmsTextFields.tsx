import React from 'react'
import { TextField, Typography, makeStyles } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { rootT } from '../store'
import { ON_CHANGE_VALUE } from '../actions/constants';

interface arrOfTextFields {
  textfieldValue: string
  placeholder: string
  indexInArray: string
  map?: Function
}
const CmsTextFields = ({ arrOfTextFields, index, type }: { arrOfTextFields: arrOfTextFields[], index, type }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant='body1' display='inline' className={classes.index}>{index}</Typography>
      {arrOfTextFields.map((props: arrOfTextFields) =>
        <div key={props.indexInArray} style={{ display: 'inline' }}>
          <CustomCmsTextField
            textfieldValue={props.textfieldValue}
            placeholder={props.placeholder}
            indexInArray={props.indexInArray}
            type={type}
            index={index}
          />
        </div>
      )}
    </>
  )
}


interface T { textfieldValue, placeholder, indexInArray, deeperIndexInArray?: any, type, index }
export const CustomCmsTextField = ({ textfieldValue, placeholder, indexInArray, deeperIndexInArray, type, index }: T) => {
  const { cmsPortfolioContent } = useSelector((state: rootT) => state)
  const classes = useStyles();
  const dispatch = useDispatch()

  const onChangeValue = (props) => dispatch({ type: ON_CHANGE_VALUE, payload: props })

  let value
  switch (type) {
    case 'tabSectionTitles':
      if (deeperIndexInArray || deeperIndexInArray === 0)
        value = cmsPortfolioContent[type][indexInArray].subSections[deeperIndexInArray].tabTitle
      else
        value = cmsPortfolioContent[type][indexInArray].tabTitle
      break;
    case 'introParagraph':
      value = cmsPortfolioContent[type]
      break
    case 'videoProjects':
    case 'tech':
    case 'moreTech':
    case 'photoshop':
    case 'bio':
    case 'contacts':
      if (index === null)
        value = cmsPortfolioContent[type][indexInArray]
      else
        value = cmsPortfolioContent[type][index][indexInArray]
      break
    default:
      break;
  }

  return (
    <TextField className={classes.textField}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChangeValue({ type, index, input: indexInArray, deeperIndexInArray, value: e.target.value })} />
  )
}

export default CmsTextFields


const useStyles = makeStyles((theme) => ({
  textField: {
    marginRight: '10px',
    maxWidth: '15em',
  },
  index: {
    marginRight: 10,
    marginTop: '.2em',
    display: 'inline-block'
  },
}));