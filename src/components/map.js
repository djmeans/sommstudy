import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={6}
    defaultCenter={ props.defaultCenter}>
    {props.isMarkerShown && <Marker position={props.defaultCenter} />}
  </GoogleMap>
))

export default MapComponent;


// export default GoogleApiWrapper({
//     apiKey: ('AIzaSyDSpgCMh_N-RIYdF2n5OqtbPWovHn3iqPo')
// })(MapContainer)