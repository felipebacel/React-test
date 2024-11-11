import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native'
import React, { useState, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, useNavigation } from 'expo-router';
import debounce from 'lodash.debounce';
import { XMarkIcon } from 'react-native-heroicons/outline';

import { image185, searchMovies } from '../api/MovieDB';


var { width, height } = Dimensions.get('window');

const SearchScreen = () => {
  const [results, setResults] = useState([])
  const navigation = useNavigation();

  const handleSearch = value => {
    if (value && value.length > 2) {
      searchMovies({
        query: value,
        include_adult: 'false',
        language: 'pt-BR',
        page: '1'
      }).then(data => {
        //console.log('got movies: ', data);
        if (data && data.results) setResults(data.results)
      })
    } else {
      setResults([])
    }
  }

  const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

  return (
    <SafeAreaView className='bg-primary flex-1'>
      <View className='mx-4 mb-3 flex-row justify-between item-center border border-neutral-500 rounded-full'>
        <TextInput
          onChangeText={handleTextDebounce}
          placeholder='Procure um filme'
          placeholderTextColor={'lightgray'}
          className='pl-6 flex-1 text-base font-psemibold text-white tracking-wider'
        />

        <TouchableOpacity
          onPress={() => router.navigate('/tabs/home')}
          className='rounded-full p-3 m-1 bg-black-200'
        >
          <XMarkIcon size='25' color='white' />
        </TouchableOpacity>
      </View>

      {
        results.length > 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            className='space-y-3'
          >
            <Text className='text-white font-psemibold ml-1'>
              Resultados ({results.length})</Text>
            <View className='flex-row justify-between flex-wrap'>
              {
                results.map((item, index) => {
                  return (
                    <TouchableWithoutFeedback
                      key={index}
                      onPress={() => navigation.push('MovieScreen', item)}
                    >
                      <View className='space-y-2 mb-4'>
                        <Image
                          className='rounded-3xl'
                          source={{ uri: image185(item?.poster_path) }}
                          style={{ width: width * 0.44, height: height * 0.3 }}
                        />

                        <Text className='text-gray-100 ml-1'>
                          {item?.title.length > 22 ? item?.title.slice(0, 22) + '...' : item?.title}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  )
                })
              }
            </View>
          </ScrollView>
        ) : (
          <View className='flex-row justify-center'>
            <Image
              source={require('../assets/images/empty.png')}
              className='h-96 w-96'
            />
          </View>
        )
      }
    </SafeAreaView>
  )
}

export default SearchScreen