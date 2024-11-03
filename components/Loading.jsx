import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';


var{width, height} = Dimensions.get('window');
const Loading = () => {
  return (
    <View style={{height,width}} className='absolute flex-row justify-center items-center'>
     <Progress.CircleSnail thickness={12} size={160} color='#161622' ></Progress.CircleSnail>
    </View>
  )
}

export default Loading