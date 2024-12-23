import {Image, Text, TouchableOpacity, View} from "react-native";
import images from "@/constants/images";
import icons from "@/constants/icons";

export const FeaturedCard = ({item, onPress}: { item: any, onPress: () => void }) => {


    return (
        <TouchableOpacity className={"w-60 h-80 rounded-xl relative"}>
            <Image source={{uri: item.image}} className={"w-full h-full rounded-xl"}/>
            <Image source={images.cardGradient} className={"w-full h-full absolute bottom-0 rounded-xl"}/>

            <View
                className="flex px-3 h-8 rounded-full bg-white absolute top-5 right-5 flex-row items-center justify-center gap-1">
                <Image source={icons.star} className="size-5"/>
                <Text className="font-rubik-semiBold text-base text-primary-300 ">{item?.rating}</Text>
            </View>

            <View className="w-60 p-5 absolute bottom-0">
                <Text className="text-white text-xl font-bold">{item?.name}</Text>
                <Text className="text-white text-base font-rubik">{item?.address} </Text>
                <Text className="text-white text-xl font-bold">${item?.price}</Text>
            </View>

            <TouchableOpacity className="absolute bottom-6 right-5">
                <Image source={icons.heart} className="size-6"/>
            </TouchableOpacity>

        </TouchableOpacity>
    )
}

export const Card = ({item, onPress}: { item: any, onPress: () => void }) => {
    return (
        <TouchableOpacity
            className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative"
            onPress={onPress}
        >
            <View className="flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50">
                <Image source={icons.star} className="size-2.5"/>
                <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
                    {item.rating}
                </Text>
            </View>

            <Image source={{uri: item.image}} className="w-full h-40 rounded-lg"/>

            <View className="flex flex-col mt-2">
                <Text className="text-base font-rubik-bold text-black-300">
                    {item.name}
                </Text>
                <Text className="text-xs font-rubik text-black-100">
                    {item.address}
                </Text>

                <View className="flex flex-row items-center justify-between mt-2">
                    <Text className="text-base font-rubik-bold text-primary-300">
                        ${item.price}
                    </Text>
                    <Image
                        source={icons.heart}
                        className="w-5 h-5 mr-2"
                        tintColor="#191D31"
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}