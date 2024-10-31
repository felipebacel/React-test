import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { router } from 'expo-router'

const Cast = ({cast}) => {
  let personName = 'Hokuto Matsumura'
  let characterName = 'Souta Munakata'
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
            onPress={()=> router.push('/PersonScreen',person)}
            >
              <View className='overflow-hidden rounded-full h-20 w-20 items-center border-neutral-500'>
              <Image className='rounded-xl h-24 w-20'
              source={require('../assets/images/CastImage1.png')}
              />
              </View>
                <Text className='text-white text-xs mt-1'>
                    {personName.length>10? personName.slice(0,10)+'...': personName}
                </Text>
                <Text className='text-white text-xs mt-1'>
                    {characterName.length>10? characterName.slice(0,10)+'...': characterName}
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