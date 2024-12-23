import {ActivityIndicator, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import Search from '@/components/Search'
import {Card} from "@/components/Card";
import {useGlobalContext} from "@/lib/global-provider";
import {router, useLocalSearchParams} from "expo-router";
import {useAppwrite} from "@/lib/useAppwrite";
import {getLatestProperties, getProperties} from "@/lib/appwrite";
import {useEffect} from "react";
import Filter from "@/components/Filter";
import NoResult from "@/components/NoResult";
import icons from '@/constants/icons'


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

                              <View className="flex items-center justify-between flex-row">
                                  <View>
                                      <TouchableOpacity
                                          onPress={() => router.back()}
                                          className="bg-primary-100 w-12 h-12 border border-gray-100 flex items-center justify-center rounded-full ">
                                          <Image className="size-5" source={icons.backArrow}/>
                                      </TouchableOpacity>
                                  </View>
                                  <View>
                                      <Text>Search for your ideal home</Text>
                                  </View>
                                  <View>
                                      <TouchableOpacity
                                      >
                                          <Image className="size-6 mr-4" source={icons.bell}/>
                                      </TouchableOpacity>
                                  </View>
                              </View>

                              <Search/>
                              <Filter/>


                              <View className="mt-5">
                                  <View className="flex flex-row items-center justify-between">
                                      <Text className="font-rubik-medium
                         text-xl ">Found {properties?.length} Apartments
                                      </Text>

                                  </View>


                              </View>
                          </View>
                      )}
            />


        </SafeAreaView>


    );
}
