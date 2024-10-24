import { View, Text,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native';
import { images} from '../../constants';
import FormField from '../../components/FormField'
import { useState } from 'react';
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router';
import { FIREBASE_AUTH} from '../../firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
const [form, setForm] = useState({email:'',
   password:''})
   const [isSubmitting, setIsSubmitting] = useState(false)
   const submit = ()=>{}
   const auth = FIREBASE_AUTH;

   const logar = async () =>{
     setIsSubmitting(true);
      try {
         const response = await signInWithEmailAndPassword(auth, form.email, form.password);
         console.log(response);
         alert('Cheque o endereço de email');
         } catch (error){
         console.log(error);
         alert('login falhou'+ error.message);
         } finally{
         setIsSubmitting(false);
    }

   }

  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
          <Image source={images.logo} resizeMode='contain'
           className='w-[115px] h-[35px]'
          />
          <Text className="text-2xl text-white text-semibold font-psemibold">Logue no React-Ratings            
          </Text>
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
            title='Logar'
            handlePress={submit}
            containerStyles='mt-7'
            onPress = {logar}
            isLoading={isSubmitting}
          />
          <View className ='justify-center pt-5 flex-row gap-2'>
            <Text className="text-lg text-gray-100 font-pregular">
              Não tem uma conta?
              </Text>
              <Link href="/sign-up" className='text-lg font-psemibold text-secondary'>
               Inscreva-se
              </Link>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn