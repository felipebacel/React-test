import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { router } from 'expo-router'
import { image185 } from '../api/MovieDB'
import { useNavigation } from 'expo-router'

const Cast = ({cast}) => {
  const navigation = useNavigation();
  return (
    <View className='my-6'>
      <Text className='text-white text-lg mx-4 mb-5'>Elenco Principal</Text>
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 15}}
      >{cast && cast.map((person,index)=>{
        return(
            <TouchableOpacity 
            key={index}
            className='mr-4 items-center'
            onPress={()=> navigation.push('PersonScreen',person)}
            >
              <View className='overflow-hidden rounded-full h-20 w-20 items-center border-neutral-500'>
              <Image className='rounded-xl h-24 w-20'
              //source={require('../assets/images/CastImage1.png')}
              source={{uri: image185(person?.profile_path)}}
              />
              </View>
                <Text className='text-white text-xs mt-1'>
                    {person?.original_name.length>10? person?.original_name.slice(0,10)+'...': person?.original_name}
                </Text>
                <Text className='text-white text-xs mt-1'>
                    {person?.character.length>10? person?.character.slice(0,10)+'...': person?.character}
                </Text>
            </TouchableOpacity>
        )
      })
      }

      </ScrollView>
    </View>
  )
}

export default Cast