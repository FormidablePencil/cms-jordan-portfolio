import { CrystalParallax, CrystalGallery } from 'parallax-effect-crystals'
import crystalParallaxDefault from './constants/parallaxCrystalProps';
import React from 'react'
import Cms from './Cms'
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import FabSave from './components/FabSave';
import { useDispatch } from 'react-redux';
import { READY_TO_SAVE } from './actions/constants';

export enum paths {
  cms = '/',
  parallaxCanvas = '/parallax-canvas',
  crystalsGallery = '/crystals-gallery',
}


function Routes() {
  const dispatch = useDispatch()

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
          withGui={true}
          onChange={crystalPropsChanged}
          pulledRawCrystalData={crystalParallaxDefault}
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
