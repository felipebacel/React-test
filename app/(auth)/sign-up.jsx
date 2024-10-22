import { View, Text,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native';
import { images} from '../../constants';
import FormField from '../../components/FormField'
import { useState } from 'react';
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router';
import { createUser} from '../../lib/appwrite'

const SignUp = () => {
const [form, setForm] = useState({
   userName:'',
   email:'',
   password:''})
   const [isSubmitting, setIsSubmitting] = useState(false)
   const submit = ()=>{
    createUser();
   }

  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
          <Image source={images.logo} resizeMode='contain'
           className='w-[115px] h-[35px]'
          />
          <Text className="text-2xl text-white text-semibold font-psemibold">Inscreva-se no React-Ratings            
          </Text>
          <FormField
            title='Nome de usuario'
            value={form.userName}
            handleChangeText={(e) => setForm({...form,userName: e })}
            otherStyles="mt-10"
            
          /> 
          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e) => setForm({...form,email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          /> 
          <FormField
           title='Senha'
           value={form.password}
           otherStyles="mt-7"
           handleChangeText={(e) => setForm({...form,password: e })}
           
          />
          <CustomButton
            title='Inscrever-se'
            handlePress={submit}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />
          <View className ='justify-center pt-5 flex-row gap-2'>
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