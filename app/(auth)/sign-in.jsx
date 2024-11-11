import { View, Text, Image, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native';
import { images } from '../../constants';
import FormField from '../../components/FormField'
import { useState } from 'react';
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router';
import { FIREBASE_AUTH } from '../../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;
  const user = auth.currentUser;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert('Logado com Sucesso!!');
      router.push('/tabs/home')
    } catch (error) {
      console.log(error);
      alert('Login falhou - ' + error.message);
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center min-h-[90vh] px-4 my-6">
          <Text className="text-2xl text-white text-semibold font-psemibold">Logue no Movie Time</Text>
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
            onPress={signIn}
            activeOpacity={0.7}
            className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center mt-7 ${loading ? 'opacity-50' : ''}`}
            disabled={loading}
          >
            <Text className={'text-primary font-semibold text-lg'}>Logar</Text>
          </TouchableOpacity>

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className="text-lg text-gray-100 font-pregular">
              Não tem uma conta?
            </Text>

            <Link href="/sign-up" className='text-lg font-psemibold text-secondary'>
              Inscreva-se
            </Link>
          </View>

          <View className='justify-center pt-5 items-center '>
            <Link href="/tabs/home" className='text-lg font-psemibold text-secondary'>
              Entrar sem Logar
            </Link>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn