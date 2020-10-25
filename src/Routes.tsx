import { CrystalParallax, CrystalGallery } from 'parallax-effect-crystals'
import React from 'react'
import Cms from './Cms'
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import FabSave from './components/FabSave';
import { useDispatch, useSelector } from 'react-redux';
import { READY_TO_SAVE } from './actions/constants';
import { rootT } from './store';

export enum paths {
  cms = '/',
  parallaxCanvas = '/parallax-canvas',
  crystalsGallery = '/crystals-gallery',
}


function Routes() {
  const dispatch = useDispatch()
  const { rawCrystalData } = useSelector((state: rootT) => state)
  console.log(rawCrystalData, 'rawCrystalDatarawCrystalDatarawCrystalDatarawCrystalData');

  const crystalPropsChanged = () =>
    dispatch({ type: READY_TO_SAVE, payload: true })

  return (
    <BrowserRouter>
      <Navbar />

      <Route exact path={paths.cms}>
        <Cms />
      </Route>

      <Route exact path={paths.parallaxCanvas}>
        <CrystalParallax
          onChange={crystalPropsChanged}
          withGui={true}
          pulledRawCrystalData={rawCrystalData}
        />
      </Route>

      <Route exact path={paths.crystalsGallery}>
        <CrystalGallery />
      </Route>


      <FabSave />

    </BrowserRouter>
  )
}

export default Routes
