import {Image, TextInput, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import icons from '@/constants/icons'
import {router, useLocalSearchParams, usePathname} from 'expo-router'
import {useDebouncedCallback} from 'use-debounce'

const Search = () => {

    const path = usePathname()
    const params = useLocalSearchParams<{ query?: string }>()
    const [search, setSearch] = useState(params.query
    );

    const debounceSearch = useDebouncedCallback((text: string) =>
            router.setParams({
                query: text
            })
        , 500)

    const handleSearch = (text: string) => {
        setSearch(text);
        debounceSearch(text);
    }


    return (
        <View
            className="flex mt-5 px-4 rounded-lg bg-accent-100 border border-primary-100 py-2 flex-row items-center justify-between  ">
            <View className="flex-1 gap-3 flex flex-row items-center">
                <Image source={icons.search} className="size-6"/>
                <TextInput value={search} onChangeText={handleSearch} placeholder="Search for anything"
                           className="flex-1 text-sm font-rubik text-black-300"/>
            </View>
            <TouchableOpacity>
                <Image source={icons.filter} className="size-6"/>
            </TouchableOpacity>
        </View>
    )
}
export default Search
