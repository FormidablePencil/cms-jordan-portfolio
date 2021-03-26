import {
  FETCHED_CMS_PORTFOLIO_DATA,
  FETCHED_CRYSTAL_DATA,
  FETCHED_CRYSTAL_DATA_FOR_HOME,
} from "./constants";

//~ fetching to server
export const fetchContentData = (credentials) => async (dispatch) => {
  const res = await fetch(process.env.REACT_APP_FETCH_LOGIN_FETCH_DATA, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ credentials }),
  });
  console.log("hit");

  interface fetchedContentT {
    data: { cmsPortfolioContent; rawCrystalData; rawCrystalDataForHome };
  }
  const fetchedContent: fetchedContentT = await res.json(); //update content state
  console.log(fetchedContent, "fetchedContentfetchedContentfetchedContent");

  if (res.status === 200) {
    if (fetchedContent.data.cmsPortfolioContent)
      dispatch({
        type: FETCHED_CMS_PORTFOLIO_DATA,
        payload: fetchedContent.data.cmsPortfolioContent,
      });
    if (fetchedContent.data.rawCrystalData) {
      dispatch({
        type: FETCHED_CRYSTAL_DATA,
        payload: fetchedContent.data.rawCrystalData,
      });
      dispatch({
        type: FETCHED_CRYSTAL_DATA_FOR_HOME,
        payload: fetchedContent.data.rawCrystalDataForHome,
      });
    }
  }
};

export const updateContent = async (
  cmsPortfolioContent,
  rawCrystalData,
  rawCrystalDataForHome,
  credentials
) => {
  const res = await fetch(process.env.REACT_APP_FETCH_USERS_UPDATE_CONTENT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      data: { cmsPortfolioContent, rawCrystalData, rawCrystalDataForHome },
      credentials,
    }),
  });
  if (res.status === 200) return true;
};
//~~~~
