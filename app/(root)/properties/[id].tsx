import React from 'react'
import {Dimensions, Image, Platform, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {router, useLocalSearchParams} from "expo-router";
import {useAppwrite} from "@/lib/useAppwrite";
import {getPropertyById} from "@/lib/appwrite";
import icons from '@/constants/icons'
import images from "@/constants/images";
import {facilities, gallery} from "@/constants/data";

const Property = () => {

    const {id}: { id: string } = useLocalSearchParams()


    const {data: property}: { data: any } = useAppwrite({
        fn: getPropertyById,
        params: {
            id: id!,
        },
    });

    const windowHeight = Dimensions.get("window").height;

    return (

        <ScrollView className="bg-white" showsVerticalScrollIndicator={false}>
            <View style={{height: windowHeight / 2.5}} className="w-full relative">

                <Image source={{uri: property?.image}} resizeMode="cover" className="size-full"/>

                <View style={{
                    top:
                        Platform.OS === "ios" ? 70 : 20,
                }} className={`absolute w-full px-6 flex flex-row items-center justify-between`}>
                    <TouchableOpacity className="w-12 flex items-center justify-center h-12 bg-white rounded-full "
                                      onPress={() => router.back()}>
                        <Image source={icons.backArrow} className="size-8 "/>
                    </TouchableOpacity>

                    <View className="flex flex-row gap-5">
                        <TouchableOpacity className="w-12 flex items-center justify-center h-12 bg-white rounded-full ">
                            <Image source={icons.heart}
                                   tintColor="#000" className="size-8"/>
                        </TouchableOpacity>
                        <TouchableOpacity className="w-12 flex items-center justify-center h-12 bg-white rounded-full ">
                            <Image source={icons.send} className="size-8"/>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

            <View className="px-6 mt-5">
                <Text className="text-2xl font-rubik-bold">Modernica Apartment</Text>
                <View className="mt-3 flex flex-row items-center gap-3">
                    <View className=" bg-primary-100 flex flex-row items-center justify-center px-3 py-2 rounded-full">
                        <Text className="uppercase font-rubik-medium text-xs  text-primary-300 ">Apartment</Text>
                    </View>
                    <View className="flex items-center justify-center flex-row gap-1">
                        <Image source={icons.star}/>
                        <Text className="font-rubik-medium text-black-200">4.8 (1,275 reviews)</Text>
                    </View>
                </View>
                <View className="mt-3 flex flex-row items-center gap-5">
                    <View className="flex items-center flex-row gap-3">
                        <View className="bg-primary-100 w-12 h-12 flex items-center justify-center rounded-full">
                            <Image className="size-5" source={icons.bed}/>
                        </View>
                        <Text className="text-base font-rubik-medium text-black-200">8 Beds</Text>
                    </View><View className="flex items-center flex-row gap-3">
                    <View className="bg-primary-100 w-12 h-12 flex items-center justify-center rounded-full">
                        <Image className="size-5" source={icons.bath}/>
                    </View>
                    <Text className="text-base font-rubik-medium text-black-200">3 Baths</Text>
                </View><View className="flex items-center flex-row gap-3">
                    <View className="bg-primary-100 w-12 h-12 flex items-center justify-center rounded-full">
                        <Image className="size-5" source={icons.area}/>
                    </View>
                    <Text className="text-base font-rubik-medium text-black-200">2000 sqft</Text>
                </View>
                </View>

                <View className="border-b border-gray-300 my-8"/>


                <View>
                    <Text className="text-xl font-rubik-medium">Agent</Text>

                    <View className="mt-4 flex flex-row items-center jsutify-between">
                        <View className="flex-1 flex flex-row items-center gap-3">

                            <Image className="size-16" source={images.avatar}/>

                            <View>
                                <Text className="text-lg font-rubik-medium">Natasya Wilodra</Text>
                                <Text>Owner</Text>
                            </View>
                        </View>
                        <View className="flex flex-row items-center gap-4">
                            <TouchableOpacity>
                                <Image className="size-8" source={icons.chat}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image className="size-8" source={icons.phone}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className="mt-6">
                        <Text className="text-xl font-rubik-medium">Overview</Text>
                        <Text className="text-base ront-rubik text-black-300 mt-2">Sleek, modern-2 bedroom apartment
                            with
                            open living space
                            high-end
                            finishes, and city
                            views. Minutes from downtown, dining and transit. </Text>
                    </View>

                    <View className="mt-6">
                        <Text className="text-xl font-rubik-medium">Facilities</Text>

                        <View className="flex flex-row flex-wrap items-center justify-between gap-5 mt-4">
                            {facilities?.map((item, i) => (
                                <View key={i} className="flex w-1/5 items-center justify-center">
                                    <View
                                        className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                                        <Image className="size-8" source={item.icon}/>
                                    </View>
                                    <Text className="font-rubik text-black-300 pt-2"
                                          numberOfLines={1}>{item.title}</Text>
                                </View>
                            ))}
                        </View>

                        <View className="mt-6">
                            <Text className="text-xl font-rubik-medium">Gallery</Text>

                            <View className="flex flex-row items-center flex-wrap justify-between gap-3 mt-4">
                                {gallery?.map((item, i) => (
                                    <View
                                        key={i}
                                        className="relative">
                                        <Image
                                            style={{
                                                width: Dimensions.get("window").width / 3.6,
                                            }}
                                            className="h-20 rounded-lg" source={item.image}/>


                                    </View>
                                ))}
                            </View>
                        </View>

                        <View className="mt-6">
                            <Text className="text-xl font-rubik-medium">Location</Text>
                            <View className="mt-4 flex flex-row items-center gap-1">
                                <Image className="size-6" source={icons.location}/>
                                <Text>Grad City St. 100. New York, United States</Text>
                            </View>
                            <View className="mt-4">
                                <Image resizeMode="cover" className="w-full h-52" source={images.map}/>
                                <View className="flex items-center flex-row justify-between mt-4">
                                    <View className="flex flex-row items-center gap-2">
                                        <Image className="size-6" source={icons.star}/>
                                        <Text className="font-rubik-medium">4.8 (1,275 reviews)</Text>
                                    </View>
                                    <Text className="text-primary-300 font-rubik-medium">See All</Text>
                                </View>
                            </View>
                        </View>

                        <View className="mt-5">
                            <View className="flex flex-row items-center gap-3">
                                <Image className="size-10" source={images.avatar}/>
                                <Text className="font-rubik-medium">Charolette Hanin</Text>
                            </View>
                            <Text className="font-rubik text-black-200 mt-2">
                                The apartment is very clean and modern. I really like the interior design. Looks like
                                I'll fell at home.
                            </Text>

                            <View className={"mt-3 flex flex-row justify-between items-center mb-5"}>
                                <View className="flex flex-row items-center gap-1">
                                    <Image tintColor="#0061FF" source={icons.heart} className="size-6"/>
                                    <Text className={"font-rubik-medium text-base text-black-300"}>938</Text>
                                </View>
                                <Text className={"font-rubik text-black-200"}>
                                    6 days ago
                                </Text>
                            </View>
                        </View>


                    </View>
                </View>


            </View>
            <View
                className="mt-5 flex flex-row items-center bg-white pt-6 pb-12 border-t border-gray-300 border-l border-r px-6 rounded-tl-[40px] rounded-tr-[40px]">
                <View className={"flex-1"}>
                    <Text
                        className={"uppercase font-rubik-medium text-black-100 text-sm -tracking-tighter"}>PRICE</Text>
                    <Text className="font-rubik-bold text-2xl text-primary-300">$17821</Text>
                </View>
                <View>
                    <TouchableOpacity className="bg-primary-300 px-10 py-4 rounded-full">
                        <Text className="text-white font-rubik-medium"> Booking Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    )
}
export default Property
