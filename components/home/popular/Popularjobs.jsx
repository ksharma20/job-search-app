import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const { jobs, isLoading, reFetch } = useFetch();
  console.log({ jobs, isLoading });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          isLoading === 2 ? (
            <Text>Something Went Wrong</Text>
          ) : (
            <ActivityIndicator size="large" color={COLORS.primary} />
          )
        ) : (
          <FlatList
            data={jobs}
            renderItem={({ item }) => <PopularJobCard job={item} />}
            keyExtractor={(item) => `propular-job-${item.id}`}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs