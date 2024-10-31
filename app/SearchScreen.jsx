import { View, Text, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions } from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { router } from 'expo-router';
import { useState } from 'react';

var{width, height} = Dimensions.get('window');
const SearchScreen = () => {
    const [results, setResults] = useState([1,2,3,4])
    let movieName = 'Suzume no Tojimari'
  return (
    <SafeAreaView className='bg-primary flex-1'>
      <View className='mx-4 mb-3 flex-row justify-between item-center border-gray-100 rounded-full'>
        <TextInput placeholder='Procure um filme'
        placeholderTextColor={'lightgray'}
        className='pb-1 pl-6 flex-1 text-base font-psemibold text-white tracking-wider'
        />
        <TouchableOpacity
        onPress={()=> router.navigate('/tabs/home')}
        className='rounded-full p-3 m-1 bg-black-200'
        >
            <XMarkIcon size='25' color='white'/>
            </TouchableOpacity>      
      </View>
      {results.length>0?( 
        <ScrollView showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal:15}}
      className='space-y-3'
      >
        <Text className='text-white font-psemibold ml-1'>
            Resultados ({results.length})</Text>
            <View className='flex-row justify-between flex-wrap'>
                {results.map((item, index)=>{
                    return(
                        <TouchableWithoutFeedback
                         key={index}
                         onPress={()=>router.push('/MovieScreen', item)}
                        >
                            <View className='space-y-2 mb-4'>
                             <Image
                             className='rounded-3xl'
                             source={require('../assets/images/moviePoster1.png')}
                             style={{width: width*0.44, height: height*0.3}}
                            />
                            <Text className='text-gray-100 ml-1'>
                                {movieName.length>22? movieName.slice(0,22)+'...': movieName
                                }

                            </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })
                }

            </View>
      </ScrollView>

      ):(
        <View className='flex-row justify-center'>
            <Image source={require('../assets/images/NoResult.png')}/>
        </View>
      )
    }
     
    </SafeAreaView>
  )
}

export default SearchScreen