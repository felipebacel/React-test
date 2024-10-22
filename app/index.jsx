import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { ScrollView } from 'react-native';
import { images } from '../constants';
import CustomButton from '../components/CustomButton'


export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height:"100%"}}>
        <View className="w-full jutify-center items-center min-h-[85vh] px-4">
          <Image
          source={images.logo}
          className="w-[130px] h-[84px]"
          resizeMode='contain'
          />
          <Image
          source={images.cards}
          className="max-w-[380px] w-full h-[300px]"
          resizeMode='contain'
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Redescubra o mundo do cinema com 
              <Text className="text-secondary-200"> React-Ratings
                </Text> 
              </Text>
              <Text className="text-m font-pregular text-gray-100 mt-7 text-center">
                Avalie, discuta e consulte aonde assistir os filmes e series mais populares 
                </Text>
                <CustomButton
                 title="Continue com E-mail"
                 handlePress={() =>router.push('/sign-in')}
                 contentContainerStyle="w-full mt-7"
                />             
          </View>
        </View>
      </ScrollView>
      <StatusBar  backgroundColor='#161622'
      style='light'
      />      
    </SafeAreaView>
  );
}


