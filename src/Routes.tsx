import { CrystalParallax } from "parallax-effect-crystals";
import React from "react";
import Cms from "./Cms";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import FabSave from "./components/FabSave";
import { useDispatch, useSelector } from "react-redux";
import {
  READY_TO_SAVE,
  FETCHED_CRYSTAL_DATA,
  FETCHED_CRYSTAL_DATA_FOR_HOME,
  RESET_CRYSTAL_DATA_FOR_HOME,
} from "./actions/constants";
import { rootT } from "./store";
import { makeStyles, Modal } from "@material-ui/core";
import ResetButton from "./components/ResetButton";
import { CrystalParallaxProvider } from "parallax-effect-crystals";

export enum paths {
  cms = "/",
  home = "/home",
  parallaxCanvas = "/parallax-canvas",
  // crystalsGallery = '/crystals-gallery',
}

function Routes() {
  const dispatch = useDispatch();
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

  const crystalClickedOn = (crystalUUID) => console.log(crystalUUID);

  return (
    <BrowserRouter>
      <Navbar />

      <div style={{ overflow: "scroll" }}>
        <Route exact path={paths.cms}>
          <Cms />
        </Route>

        <Route exact path={paths.home}>
          <CrystalParallaxProvider
            crystalClickedOn={crystalClickedOn}
            eventToFollow="mouse"
          >
            <CrystalParallax
              onChange={crystalPropsChangedForHome}
              withGui={true}
              pulledRawCrystalData={rawCrystalDataForHome}
            />
          </CrystalParallaxProvider>
        </Route>

        <Route exact path={paths.parallaxCanvas}>
          <CrystalParallaxProvider
            crystalClickedOn={crystalClickedOn}
            eventToFollow="scroll"
          >
            <CrystalParallax
              onChange={crystalPropsChanged}
              withGui={true}
              pulledRawCrystalData={rawCrystalData}
            />
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

export default Routes;
