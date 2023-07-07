import React from 'react'
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ icon, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={icon} style={styles.btnImg(dimension)} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn