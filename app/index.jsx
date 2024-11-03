import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

import { images } from '../constants';
import CustomButton from '../components/CustomButton'


export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full justify-center items-center px-4">
          <Image
            source={images.popcorn}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode='contain'
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Redescubra o mundo do cinema com
              <Text className="text-secondary-200"> React-Ratings</Text>
            </Text>

            <Text className="text-m font-pregular text-gray-100 my-5 text-center">
              Avalie, discuta e consulte aonde assistir os filmes e series mais populares
            </Text>

            <CustomButton
              title="Bem Vindo"
              handlePress={() => router.push('tabs/home')}
              contentContainerStyle="w-full mt-7"
            />
          </View>
        </View>
      </ScrollView>
      
      <StatusBar style='light' />
    </SafeAreaView>
  );
}


