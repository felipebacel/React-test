import { View, Text, ScrollView } from 'react-native'
import { Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react'
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { router } from 'expo-router';
import { Image } from 'react-native';
import MovieList from '../components/MovieList';
import { useRoute } from '@react-navigation/native';
import { fetchPersonDetails, fetchPersonMovies, image342 } from '../api/MovieDB';

var{width, height} = Dimensions.get('window');

const ios = Platform.OS =='ios';
const verticalMargin = ios? '':'my-3'

const PersonScreen = () => {
    const {params: item} =useRoute();
    const [isFavourite, toggleFavourite] = useState(false)
    const [personMovies, setPersonMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [person, setPerson] = useState({})
    useEffect(()=>{
        //console.log('person: ', item)
        getPersonDetails(item.id);
        getPersonMovies(item.id);
    },[item]);

    const getPersonDetails = async id=>{
        const data = await fetchPersonDetails(id);
        //console.log('got person details: ', data);
        if(data) setPerson(data);

    }
    const getPersonMovies = async id=>{
        const data = await fetchPersonMovies(id);
        //console.log('got person details: ', data);
        if(data && data.cast) setPersonMovies(data.cast);

    }
  return (
    <ScrollView className='flex-1 bg-primary' contentContainerStyle={{paddingBottom:20}}>
      <SafeAreaView className={' z-20 w-full flex-row justify-between items-center px-4'+verticalMargin}>
           <TouchableOpacity onPress={()=> router.back('/tabs/home')} className='rounded-xl p-1 bg-secondary'>
             <ChevronLeftIcon size='28' strokeWidth={2.5} color='white'/>
           </TouchableOpacity>
         <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)}>
             <HeartIcon size='35' color={isFavourite? 'red':'white'}/>
        </TouchableOpacity>
        </SafeAreaView>
        
        <View >
            <View className='flex-row justify-center'
            style={{
                shadowColor:'gray-100',
                shadowRadius:40,
                shadowOffset:{width:0, height:5},
                shadowOpacity:1
            }}
            >
                <View className='items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500'>
                <Image
                source={{uri: image342(person?.profile_path)}} 
                //source={require('../assets/images/CastImage1.png')}
                style={{height: height*0.43, width: width*0.74}}
                />
                </View>
            </View>
        </View>

        <View className='mt-6'>
            <Text className='text-3xl text-white font-psemibold text-center'>
                {person?.name}
            </Text>
            <Text className='text-base text-gray-100 text-center'>
                {person?.place_of_birth}
            </Text>
       
        <View className='mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full'>
            <View className='border-r-2 border-r-grey px-2 items-center'>
                <Text className='text-white font-psemibold'>Genero</Text>
                <Text className='text-neutral-300 text-sm'>{person?.gender==1? 'Feminino': 'Masculino'}</Text>
            </View>
            <View className='border-r-2 border-r-grey px-2 items-center'>
                <Text className='text-white font-psemibold'>Aniversario</Text>
                <Text className='text-neutral-300 text-sm'>{person?.birthday}</Text>
            </View>
            <View className='border-r-2 border-r-gray px-2 items-center'>
                <Text className='text-white font-psemibold'>Popularidade</Text>
                <Text className='text-neutral-300 text-sm'>{person?.popularity.toFixed(2)}%</Text>
            </View>
           
         </View>
         <View className='my-6 mx-4 space-y-2'>
            <Text className='text-white text-lg'>Biografia</Text>
            <Text className='text-gray-100 tracking-wide'>
            {person?.biography || 'N/A'}
            </Text>
         </View>
          <MovieList title='Filmes do ator' hideSeeAll={true} data={personMovies}/>
        </View>
    </ScrollView>
  )
}

export default PersonScreen