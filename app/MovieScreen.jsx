import { View, Text, Image, ScrollView, TouchableOpacity, Platform, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useRoute } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid'

import { fetchMovieCredits, fetchMovieDetails, fetchMovieSimilar, image500 } from '../api/MovieDB';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';
import Loading from '../components/Loading';
import { StatusBar } from 'expo-status-bar';


var { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const topMargin = ios ? '' : 'mt-2'

const MovieScreen = () => {
  const [movie, setMovie] = useState({})
  const [cast, setCast] = useState([])
  const [similarMovies, setSimilarMovies] = useState([])
  const [isFavourite, toggleFavourite] = useState(false)
  const [loading, setLoading] = useState(false)

  const { params: item } = useRoute();

  useEffect(() => {
    setLoading(true);
    getMovieDetails(item.id);
    getMovieCredits(item.id);
    getSimilarMovies(item.id);
  }, [item])

  const getMovieDetails = async id => {
    const data = await fetchMovieDetails(id);
    // console.log('got movie details: ', data);
    if (data) setMovie(data);
    setLoading(false)
  }
  const getMovieCredits = async id => {
    const data = await fetchMovieCredits(id);
    //console.log('got movie credits: ',data);
    if (data && data.cast) setCast(data.cast);
  }
  const getSimilarMovies = async id => {
    const data = await fetchMovieSimilar(id);
    //console.log('got similar movies: ',data);
    if (data && data.results) setSimilarMovies(data.results);
  }

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className='flex-1 bg-primary'>
      <View className='w-full'>
        <SafeAreaView className={'absolute z-20 w-full flex-row justify-between items-center px-4 ' + topMargin}>
          <TouchableOpacity onPress={() => router.back('/tabs/home')} className='rounded-xl p-1 bg-secondary'>
            <ChevronLeftIcon size='28' strokeWidth={2.5} color='white' />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
            <HeartIcon size='35' color={isFavourite ? 'red' : 'white'} />
          </TouchableOpacity>
        </SafeAreaView>

        {/* poster */}
        {
          loading ? (
            <Loading />
          ) : (
            <View>
              <Image
                source={{ uri: image500(movie?.poster_path) }}
                style={{ width, height: height * 0.55 }}
              />

              <LinearGradient
                colors={['transparent', 'rgba(23,23,23,0.4)', '#161622']}
                style={{ width, height: height * 0.40 }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                className='absolute bottom-0'
              />
            </View>
          )
        }
      </View>

      <View style={{ marginTop: -(height * 0.09) }} className='space-y-3'>

        {/* title */}
        <Text className='text-white text-center text-3xl font-bold tracking-wider'>
          {movie?.title}
        </Text>

        {/* status, release date, runtime */}
        {
          movie?.id ? (
            <Text className='text-m font-psemibold text-gray-100 text-base text-center'>
              {movie?.status} • {movie?.release_date?.split('-')[0]} • {movie?.runtime} min
            </Text>
          ) : null
        }

        {/* genres */}
        <View className='flex-row justify-center mx-4 space-x-1'>
          {
            movie?.genres?.map((genre, index) => {
              let showDot = index + 1 != movie.genres.length;
              return (
                <Text key={index} className='text-m font-psemibold text-gray-100 text-base text-center'>
                  {genre?.name} {showDot ? '•' : null}
                </Text>
              )
            })
          }
        </View>

        {/* overview */}
        <View>
          <Text className='text-gray-100 mx-4 tracking-wide'>
            {movie?.overview}
          </Text>
        </View>
      </View>

      {cast.length > 0 && <Cast cast={cast} />}

      {similarMovies.length > 0 && <MovieList title='Filmes parecidos' hideSeeAll={true} data={similarMovies} />}
      <StatusBar style='light'/>
    </ScrollView>
  )
}

export default MovieScreen