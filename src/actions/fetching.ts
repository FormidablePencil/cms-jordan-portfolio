import { FETCHED_CMS_PORTFOLIO_DATA, FETCHED_CRYSTAL_DATA } from "./constants"

//~ fetching to server
export const fetchContentData = (credentials) => async dispatch => {
  const res = await fetch('https://jordan-portfolio-server.herokuapp.com/contentdatalogin',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ credentials })
    }
  )
  console.log('hit')

  interface fetchedContentT { data: { cmsPortfolioContent, rawCrystalData } }
  const fetchedContent: fetchedContentT = await res.json() //update content state
  console.log(fetchedContent, 'fetchedContentfetchedContentfetchedContent')

  if (res.status === 200) {
    if (fetchedContent.data.cmsPortfolioContent)
      dispatch({ type: FETCHED_CMS_PORTFOLIO_DATA, payload: fetchedContent.data.cmsPortfolioContent })
    if (fetchedContent.data.rawCrystalData)
      dispatch({ type: FETCHED_CRYSTAL_DATA, payload: fetchedContent.data.rawCrystalData })
  }
}

export const updateContent = async (cmsPortfolioContent, rawCrystalData, credentials) => {
  const res = await fetch('https://jordan-portfolio-server.herokuapp.com/updatecontent',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({ data: { cmsPortfolioContent, rawCrystalData }, credentials })
    })
  if (res.status === 200)
    return true
}
//~~~~

