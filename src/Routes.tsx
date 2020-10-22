import { CrystalParallax, CrystalGallery } from 'parallax-effect'
import { parallaxDefaults } from './constants/parallaxCrystalProps';
import React from 'react'
import Cms from './Cms'
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';

export enum paths {
  cms = '/',
  parallaxCanvas = '/parallax-canvas',
  crystalsGallery = '/crystals-gallery',
}

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Route exact path={paths.cms}>
        <Cms />
      </Route>

      <Route exact path={paths.parallaxCanvas}>
        <CrystalParallax
          withGui={true}
          pulledRawCrystalData={parallaxDefaults}
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
