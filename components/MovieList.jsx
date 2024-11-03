import { View, Text, TouchableOpacity, ScrollView,Dimensions, Image } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { router } from 'expo-router'
import { useNavigation } from '@react-navigation/native';
import { image185 } from '../api/MovieDB';

var{width, height} = Dimensions.get('window');


const MovieList = ({title, data, hideSeeAll}) => {
    const navigation = useNavigation();
    
  
  return (
    <View className='mb-8 space-y-4'>
      <View className='mx-4 flex-row justify-between items-center'>
        <Text className='text-white text-xl'>{title}</Text>
        {!hideSeeAll &&(
          <TouchableOpacity>
          <Text className='text-secondary-200 text-lg'>Ver todos</Text>
         </TouchableOpacity>
        )}
        
      </View>
      <ScrollView horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 15}}>
      {
           data.map((item, index)=>{
             return(
            <TouchableWithoutFeedback 
             key={index}
             onPress={()=> navigation.push('MovieScreen',item)}
            >
                 <View className='space-y-1 mr-4'>
                 <Image
                     source={{uri: image185(item.poster_path)}} 
                     //source={require('../assets/images/MoviePoster2.png')}
                      className='rounded-3xl'
                      style={{width: width*0.33, height: height*0.22}}
                 />
                <Text className='text-white ml-1'>
                    {item.title.length>14? item.title.slice(0,14)+'...': item.title}

                </Text>
                </View>
                
                </TouchableWithoutFeedback>
        )
      })
       }

      </ScrollView>
      </View>        
  )
}

export default MovieList