import {Image, Text, View} from 'react-native'
import React from 'react'
import images from '@/constants/images'

const NoResult = () => {
    return (
        <View className="flex items-center my-5">
            <Image
                resizeMode="contain"
                className="11/12 h-80"
                source={images.noResult}/>
            <Text className="text-2xl font-rubik-bold text-black-300 mt-5">
                No Result
            </Text>
            <Text className="text-base text-black-100 mt-2">
                We could not find any result
            </Text>
        </View>
    )
}
export default NoResult
