import React from 'react'
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";

const PopularJobCard = ({ job, selectedJob, handleCardPress }) => {
  console.log(`Job Organization => `, job.organization);
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, job)}
      onPress={() => handleCardPress(job)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, job)}>
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
      <Text style={styles.companyName} numberOfLines={1}>
        {job.organization?.name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, job)}>{job.title}</Text>
        <Text style={styles.location}>{job.location_name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard