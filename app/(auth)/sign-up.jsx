import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native';
import { images } from '../../constants';
import FormField from '../../components/FormField'
import { useState } from 'react';
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router';
import { initializeAuth, FIREBASE_AUTH } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('Inscrito com sucesso!!');
    } catch (error) {
      console.log(error);
      alert('Inscrição falhou - ' + error.message);
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView>
        <View className="w-full justify-center min-h-[90vh] px-4 my-6">
          <Text className="text-2xl text-white text-semibold font-psemibold">Inscrever no Movie Time</Text>

          <FormField
            title='Email'
            value={email}
            handleChangeText={(text) => setEmail(text)}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title='Senha'
            value={password}
            otherStyles="mt-7"
            handleChangeText={(text) => setPassword(text)}
          />

          {/* 
          <CustomButton
            title='Logar'
            containerStyles='mt-7'
            onPress={signIn}
            isLoading={loading}
          /> 
          */}

          <TouchableOpacity
            onPress={signUp}
            activeOpacity={0.7}
            className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center mt-7 ${loading ? 'opacity-50' : ''}`}
            disabled={loading}
          >
            <Text className={'text-primary font-semibold text-lg'}>Inscrever-se</Text>
          </TouchableOpacity>

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className="text-lg text-gray-100 font-pregular">
              Já tem uma conta? faça
            </Text>
            <Link href="/sign-in" className='text-lg font-psemibold text-secondary'>
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp