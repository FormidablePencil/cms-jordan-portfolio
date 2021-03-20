import { pfcDefaults } from "cinema-portfolio-proj-types"

const cmsPortfolioModifiers = {
  onChangeValue: (payload, state) => {
    const { type, index, input, value, deeperIndexInArray }: {
      type, index, input, value, deeperIndexInArray?: number
    } = payload
    let otherInput: string
    let otherInput2: string
    switch (type) {
      case 'tabSectionTitles':
        const updatedState = [...state[type]] // So const is actually not immutable
        if (typeof deeperIndexInArray === 'number')
          updatedState[input].subSections[deeperIndexInArray].tabTitle = value
        else
          updatedState[input].tabTitle = value
        return { ...state, [type]: updatedState }
      case 'introParagraph':
        return { ...state, [type]: value }
      case 'contacts':
      case 'bio':
        return { ...state, [type]: { ...state[type], [input]: value } }
      case 'tech':
        if (input === 'icon') {
          otherInput = 'video'
          otherInput2 = 'alt'
        } else if (input === 'video') {
          otherInput = 'alt'
          otherInput2 = 'icon'
        } else if (input === 'alt') {
          otherInput = 'video'
          otherInput2 = 'icon'
        }
        break;
      case 'moreTech':
        if (input === 'icon') otherInput = 'alt'
        else otherInput = 'icon'
        break;
      case 'photoshop':
      case 'videoProjects':
        if (input === 'url') otherInput = 'alt'
        else otherInput = 'url'
        break;

      default:
    }
    let addedNew = [...state[type]]
    let newthing
    if (type === 'tech') {
      newthing = {
        [otherInput]: state[type][index][otherInput],
        [otherInput2]: state[type][index][otherInput2],
        [input]: value
      }
    } else {
      newthing = {
        [otherInput]: state[type][index][otherInput],
        [input]: value
      }
    }
    addedNew[index] = newthing
    return { ...state, [type]: addedNew }
  },


  deleteItemOnClick: (props, state) => {
    const { type, itemInArr }: { type, itemInArr } = props
    const copiedStateValues = [...state[type]]
    let updatedValues
    updatedValues = copiedStateValues.filter((item, index) => index !== itemInArr && item) //splice 
    return { ...state, [type]: updatedValues }
  },

  newAdditionOnClick: (type, state) => { //~ transform into redux reducer
    return {
      ...state, [type]:
        [...state[type], pfcDefaults[type]]
    }
  }

}

export default cmsPortfolioModifiers
