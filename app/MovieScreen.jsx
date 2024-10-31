import { View, Text, TouchableOpacity,Image } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon} from 'react-native-heroicons/solid'
import { Platform, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';


var{width, height} = Dimensions.get('window');
const ios = Platform.OS =='ios';
const topMargin = ios?'':'mt-2'

const MovieScreen = () => {
  let movieName = 'Suzume no Tojimari';
  const {params: item} = useRoute();
  const [isFavourite, toggleFavourite] = useState(false)
  const [cast, setCast] = useState([1,2,3,4,5])
  const [similarMovies, setSimilarMovies] = useState([1,2,3])
  useEffect(()=>{
    // detalhes do filme
  },[item])
  return (
    <ScrollView contentContainerStyle={{paddingBottom:20}} className='flex-1 bg-primary'
    
    >
      <View className='w-full'>
        <SafeAreaView className={'absolute z-20 w-full flex-row justify-between items-center px-4'+topMargin}>
          <TouchableOpacity onPress={()=> router.back('/tabs/home')} className='rounded-xl p-1 bg-secondary'>
            <ChevronLeftIcon size='28' strokeWidth={2.5} color='white'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)}>
            <HeartIcon size='35' color={isFavourite? '#FF8E01':'white'}/>
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image source={require('../assets/images/moviePoster1.png')}
          style={{width, height: height*0.55}}
          />
          <LinearGradient colors={['transparent','rgba(23,23,23,0.4)','#161622']}
          style={{width,height:height*0.40}}
          start={{x:0.5,y:0}}
          end={{x:0.5,y:1}}
          className='absolute bottom-0'
          >
          </LinearGradient>
        </View>
      </View>
      <View style={{marginTop: -(height*0.09)}} className='space-y-3'>
        <Text className='text-white text-center text-3xl font-bold tracking-wider'>
          {movieName}
        </Text>
        <Text className='text-m font-psemibold text-gray-100 text-base text-center'>
          Lançado * 2022 | Duração * 2h e 2min
        </Text>
        <View className='flex-row justify-center mx-4 space-y-2'>
        <Text className='text-m font-psemibold text-gray-100 text-base text-center'>
            
          </Text>
          <Text className='text-m font-psemibold text-gray-100 text-base text-center'>
            Aventura *
          </Text>
          <Text className='text-m font-psemibold text-gray-100 text-base text-center'>
            Animação * 
          </Text>
          <Text className='text-m font-psemibold text-gray-100 text-base text-center'>
             Drama
          </Text>
        </View>
        <View>
          <Text className='text-gray-100 mx-4 tracking-wide'>
          Do mesmo criador de Your Name, Suzume no Tojimari acompanha dois amantes desafortunatos. Suzume, uma garota de 17 anos que vive em uma pacata cidade em Kyushu, conhece um jovem em uma jornada “procurando portas”. Ela o segue até um prédio em ruínas nas montanhas e encontra uma porta, como se "só ela" fosse salva da devastação. Suzume se sente atraída por um poder invisível e estende a mão para a porta. Logo, portas em todo o Japão começam a se abrir uma após a outra. As portas que se abriram devem ser fechadas para fechar a calamidade que jaz do outro lado. Agora, começa a "jornada de fechar portas" de Suzume.
          </Text>
        </View>
      </View>
      <Cast cast={cast}/>
      <MovieList title='Filmes parecidos' hideSeeAll={true} data={similarMovies}/>
    </ScrollView>
  )
}

export default MovieScreen