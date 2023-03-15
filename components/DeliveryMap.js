import { View, Text } from 'react-native'
import React from 'react'
import MapView, { Marker } from "react-native-maps";

const DeliveryMap = ({lat,long,title,desc}) => {

  return (
    <MapView
        initialRegion={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: lat,
            longitude: long,
          }}
          title={title}
          description={desc}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
  )
}

export default DeliveryMap