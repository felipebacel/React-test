import { View, Text, ScrollView, TouchableOpacity, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'

import { fetchTrendingMovies, fetchUpcomingMovies, fetchTopRatedMovies } from '../../api/MovieDB'
import TrendingMovies from '../../components/TrendingMovies'
import MovieList from '../../components/MovieList'
import Loading from '../../components/Loading'


const ios = Platform.OS == 'ios';

const Home = () => {
  const [trending, setTrending] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [topRated, setTopRated] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, [])

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    // console.log('got trending movies', data);
    if (data && data.results) setTrending(data.results);
    setLoading(false)
  }
  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    // console.log('got upcoming movies', data);
    if (data && data.results) setUpcoming(data.results);
  }
  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    // console.log('got top rated movies', data);
    if (data && data.results) setTopRated(data.results);
  }

  return (
    <View className='flex-1 bg-primary h-full'>
      <SafeAreaView className={ios ? '-mb-2' : 'my-3'}>
        <View className='flex-row justify-between items-center mx-4'>
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color='white' />

          <Text className='text-white text-3xl font-psemibold'>
            <Text className='text-secondary-200'>F</Text>ilmes
          </Text>

          <TouchableOpacity onPress={() => router.navigate('SearchScreen')}>
            <MagnifyingGlassIcon size='30' strokeWidth={2} color='white' />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {
        loading ? (
          <Loading />
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}
          >
            {trending.length > 0 && <TrendingMovies data={trending} />}

            <MovieList title='Lançamentos' data={upcoming} />

            <MovieList title='Melhores avaliações' data={topRated} />

          </ScrollView>
        )
      }

    </View>
  )
}

export default Home