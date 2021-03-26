import {
  CrystalParallax,
  CrystalParallaxProvider,
} from "parallax-effect-crystals";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import {
  FETCHED_CRYSTAL_DATA,
  FETCHED_CRYSTAL_DATA_FOR_HOME,
  READY_TO_SAVE,
} from "./actions/constants";
import Cms from "./Cms";
import FabSave from "./components/FabSave";
import ResetButton from "./components/ResetButton";
import Navbar from "./layouts/Navbar";
import { rootT } from "./store";
import { Grid, Input, Button, makeStyles } from "@material-ui/core";

export enum paths {
  cms = "/",
  home = "/home",
  parallaxCanvas = "/parallax-canvas",
  // crystalsGallery = '/crystals-gallery',
}

function Routes() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { rawCrystalData, rawCrystalDataForHome } = useSelector(
    (state: rootT) => state
  );

  const crystalPropsChanged = (crystalDataProps) => {
    dispatch({ type: FETCHED_CRYSTAL_DATA, payload: crystalDataProps });
    dispatch({ type: READY_TO_SAVE, payload: true });
  };

  const crystalPropsChangedForHome = (crystalDataProps) => {
    dispatch({
      type: FETCHED_CRYSTAL_DATA_FOR_HOME,
      payload: crystalDataProps,
    });
    dispatch({ type: READY_TO_SAVE, payload: true });
  };

  return (
    <BrowserRouter>
      <Navbar />

      <div style={{ overflow: "scroll" }}>
        <Route exact path={paths.cms}>
          <Cms />
        </Route>

        <Route exact path={paths.home}>
          <CrystalParallaxProvider eventToFollow="mouse">
            <div className={classes.relativeContainer}>
              <CrystalParallax
                onChange={crystalPropsChangedForHome}
                withGui={true}
                pulledRawCrystalData={rawCrystalDataForHome}
              />
            </div>
          </CrystalParallaxProvider>
        </Route>

        <Route exact path={paths.parallaxCanvas}>
          <CrystalParallaxProvider eventToFollow="scroll">
            <div className={classes.relativeContainer}>
              <CrystalParallax
                onChange={crystalPropsChanged}
                withGui={true}
                pulledRawCrystalData={rawCrystalData}
              />
            </div>
          </CrystalParallaxProvider>
        </Route>

        {/* <Route exact path={paths.crystalsGallery}>
            <CrystalGallery />
            </Route> */}

        <FabSave />
      </div>
      <ResetButton />
    </BrowserRouter>
  );
}

const useStyles = makeStyles(() => ({
  relativeContainer: {
    position: "relative",
  },
}));

export default Routes;
