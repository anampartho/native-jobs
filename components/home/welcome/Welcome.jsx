import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';

import styles from './welcome.style'
import {icons, images, SIZES} from '../../../constants'
import { useRouter } from 'expo-router';

const jobTypes = ['Full-time', 'Part-time', 'Contractor', 'Remote'];

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState('Full-time');
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Tashrik!</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} value="" onChange={() => {}} placeholder='What are you looking for?' />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image source={icons.search} resizeMode="contain" style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList keyExtractor={item => item} contentContainerStyle={{columnGap: SIZES.small}} horizontal data={jobTypes} renderItem={({item}) => (
          <TouchableOpacity style={styles.tab(activeJobType, item)} onPress={() => {
            setActiveJobType(item);
            router.push(`/search/${item}`)
          }}>
            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
          </TouchableOpacity>
        )} />
      </View>
    </View>
  )
}

export default Welcome
