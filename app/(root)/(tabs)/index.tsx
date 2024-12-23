import {ActivityIndicator, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";

import images from '@/constants/images'
import icons from '@/constants/icons'
import Search from '@/components/Search'
import {Card, FeaturedCard} from "@/components/Card";
import {useGlobalContext} from "@/lib/global-provider";
import {useLocalSearchParams} from "expo-router";
import {useAppwrite} from "@/lib/useAppwrite";
import {getLatestProperties, getProperties} from "@/lib/appwrite";
import {useEffect} from "react";
import Filter from "@/components/Filter";
import NoResult from "@/components/NoResult";

export default function Index() {

    const {user} = useGlobalContext();

    const params = useLocalSearchParams<{ query?: string; filter?: string }>();

    const {data: latestProperties, loading: latestPropertiesLoading} =
        useAppwrite({
            fn: getLatestProperties,
        });

    const {
        data: properties,
        refetch,
        loading,
    } = useAppwrite({
        fn: getProperties,
        params: {
            filter: params.filter!,
            query: params.query!,
            limit: 6,
        },
        skip: true,
    });

    useEffect(() => {
        refetch({
            filter: params.filter!,
            query: params.query!,
            limit: 6,
        });
    }, [params.filter, params.query]);


    return (
        <SafeAreaView className="h-full bg-white">


            <FlatList data={properties}
                      ListEmptyComponent={() =>
                          loading ? <ActivityIndicator size="large" className="text-primary-300 my-10"/> :
                              <NoResult/>
                      }
                      renderItem={({item}) => <Card onPress={() => console.log('')} item={item}/>}
                      keyExtractor={(item, index) => index.toString()}
                      showsVerticalScrollIndicator={false}
                      numColumns={2}
                      contentContainerClassName="pb-32"
                      columnWrapperClassName="flex gap-5 px-5"
                      ListHeaderComponent={() => (
                          <View className="px-5">
                              <View className="flex flex-row items-center justify-between">
                                  <View className="flex flex-row items-center gap-3"
                                  >
                                      <TouchableOpacity>
                                          <Image source={images.avatar} className="size-12"/>
                                      </TouchableOpacity>
                                      <View>
                                          <Text className="text-xs font-rubik text-black-100">Good Morning</Text>
                                          <Text className="text-base font-rubik-medium text-black-300">Syket
                                              Bhattachergee</Text>
                                      </View>
                                  </View>
                                  <View className="px-4">
                                      <TouchableOpacity>
                                          <Image source={icons.bell} className="size-6"/>
                                      </TouchableOpacity>
                                  </View>
                              </View>
                              <Search/>

                              <View className="mt-5">
                                  <View className="flex mb-5 flex-row items-center justify-between">
                                      <Text className="font-rubik-medium
                         text-xl ">Featured</Text>
                                      <TouchableOpacity>
                                          <Text className=" font-rubik-medium text-primary-300">See
                                              All</Text>
                                      </TouchableOpacity>
                                  </View>

                                  {
                                      latestPropertiesLoading ?
                                          <ActivityIndicator size="large"
                                                             className="text-primary-300"/> : !latestProperties || latestProperties.length === 0 ? (
                                                  <NoResult/>
                                              ) :
                                              <FlatList horizontal showsHorizontalScrollIndicator={false}

                                                        contentContainerClassName="flex gap-5"
                                                        data={latestProperties}
                                                        renderItem={({item}: any) => <FeaturedCard item={item}
                                                                                                   onPress={() => console.log('')}/>
                                                        }
                                                        keyExtractor={item => item.$id}
                                              />
                                  }

                              </View>
                              <View className="mt-5">
                                  <View className="flex flex-row items-center justify-between">
                                      <Text className="font-rubik-medium
                         text-xl ">Our Recommendation
                                      </Text>
                                      <TouchableOpacity>
                                          <Text className=" font-rubik-medium text-primary-300">See
                                              All</Text></TouchableOpacity>
                                  </View>
                                  <Filter/>

                              </View>
                          </View>
                      )}
            />


        </SafeAreaView>


    );
}
