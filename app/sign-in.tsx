import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import images from '@/constants/images';
import icons from '@/constants/icons';

const SignIn = () => {
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerClassName="h-full">
                <Image
                    source={images.onboarding}
                    className="h-4/6 w-full"
                    resizeMode="contain"
                />
                <View className="px-10">
                    <Text className="text-base text-center uppercase font-rubik text-black-300">
                        Welcome to ReState
                    </Text>
                    <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
                        Let's Get You Closer to {'\n'}
                        <Text className="text-primary-300">Your Ideal Home</Text>
                    </Text>
                    <Text className="text-lg font-rubik text-black-200 text-center mt-12">
                        Login to ReState with Google
                    </Text>
                    <TouchableOpacity
                        className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'>
                        <View className="flex gap-3 flex-row items-center justify-center">
                            <Image
                                source={icons.google}
                                resizeMode="contain"
                                className="w-5 h-5"
                            />
                            <Text className="text-lg font-rubik-medium ">
                                Continue with Google
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignIn
