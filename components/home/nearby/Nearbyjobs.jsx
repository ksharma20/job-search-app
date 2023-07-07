import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

import styles from "./nearbyjobs.style";
import useFetch from "../../../hook/useFetch";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import { COLORS } from "../../../constants";
import { useRouter } from "expo-router";

const Nearbyjobs = () => {
  const router = useRouter();
  const { jobs, isLoading, reFetch } = useFetch(2);
  console.log({ jobs, isLoading });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>NearBy Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.cardsContainer}
        data={jobs}
        renderItem={({ item }) => (
          <NearbyJobCard
            job={item}
            handleCardPress={() => router.push(`/job-details/${item.id}`)}
          />
        )}
        keyExtractor={(item) => `nearby-job-${item.id}`}
        onEndReachedThreshold={0.01}
        onEndReached={(info) => reFetch(3)}
      />
    </View>
  );
};

export default Nearbyjobs