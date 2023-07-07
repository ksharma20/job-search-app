import React from 'react'
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ job, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress(job)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={
            job.organization?.logo_url.length
              ? job.organization?.logo_url
              : "https://job4youindia.com/wp-content/uploads/2022/07/Job.png"
          }
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName}>{job.title}</Text>
        <Text style={styles.jobType}>{job.type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard