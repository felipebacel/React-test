import { View, Text, Image, Dimensions, Platform, ScrollView, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { images } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftStartOnRectangleIcon } from 'react-native-heroicons/outline';
import { router } from 'expo-router';

var { width, height } = Dimensions.get('window');

const ios = Platform.OS == 'ios';
const verticalMargin = ios ? '' : 'my-3'

const Profile = () => {
  const [logged, setLogged] = useState(false)

  const auth = FIREBASE_AUTH;
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      setLogged(true);
    }
  }, [])

  const signOut = () => {
    if (user) {
      FIREBASE_AUTH.signOut();
      setLogged(false);
      alert('Deslogado com Sucesso!!');
      //router.back();
    }
  }

  return (
    <ScrollView className='flex-1 bg-primary' contentContainerStyle={{ paddingBottom: 20 }}>
      <SafeAreaView className={' z-20 w-full flex-row justify-end items-center px-4 ' + verticalMargin}>
        <TouchableOpacity onPress={signOut}>
          <ArrowLeftStartOnRectangleIcon size='34' strokeWidth={2.5} color='red' />
        </TouchableOpacity>
      </SafeAreaView>

      <View className='flex-row justify-center'>
        <View className='items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500'>
          <Image
            source={logged ? images.profile : images.profile_default}
            style={{ height: 300, width: width * 0.74 }}
          />
        </View>
      </View>

      <View className='mt-6'>
        <Text className="text-xl text-white font-psemibold text-center">
          {logged ? user.email : "Desconectado"}
        </Text>
        <Text className='text-base text-gray-100 text-center'>
          {logged ? "Uid: " + user.uid : ""}
        </Text>
      </View>
    </ScrollView>
  )
}

export default Profile