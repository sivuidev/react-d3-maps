/* global google */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
const { compose, withProps } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} = require("react-google-maps");
const { DrawingManager } = require("react-google-maps/lib/components/drawing/DrawingManager");

const MapWithADrawingManager = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="container" style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={3}
    defaultCenter={new google.maps.LatLng(17.7648348,-10.1433)}
  >
    <DrawingManager
      defaultDrawingMode={google.maps.drawing.OverlayType.CIRCLE}
      defaultOptions={{
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.CIRCLE,
            google.maps.drawing.OverlayType.POLYLINE
          ],
        },
        circleOptions: {
          fillColor: `#FF0000`,
          strokeColor: `#FF0000`,
          fillOpacity: 1,
          strokeWeight: 5,
          clickable: false,
          editable: false,
          draggable: true,
          zIndex: 1,
        },
      }}
    />
  </GoogleMap>
);

export default MapWithADrawingManager;
