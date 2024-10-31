import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { TouchableOpacity } from 'react-native'
import TrendingMovies from '../../components/TrendingMovies'
import { useState } from 'react'
import { Platform } from 'react-native';
import MovieList from '../../components/MovieList'
import { router } from 'expo-router'


const ios = Platform.OS =='ios';
const Home = () => {
  const [trending, seTrending] = useState([1,2,3])
  const [upcoming, setUpcoming] = useState([1,2,3])
  const [topRated, setTopRated] = useState([1,2,3])
  return (
    <View className='flex-1 bg-primary h-full'>
      <SafeAreaView className={ios?'-mb-2':'mb-3'}>
        <View className='flex-row justify-between items-center mx-4'>
        <Bars3CenterLeftIcon size="30" strokeWidth={2} color='white'/>
        <Text className='text-white text-3xl font-psemibold'>Filmes</Text>
        <TouchableOpacity onPress={()=> router.navigate('SearchScreen')}>
          <MagnifyingGlassIcon size='30' strokeWidth={2} color='white'/>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:10}}
      >
        <TrendingMovies data={trending}/>

        <MovieList title='Lançamentos' data={upcoming}/>

        <MovieList title='Melhores avaliações' data={topRated}/>

      </ScrollView>
    </View>
  )
}

export default Home