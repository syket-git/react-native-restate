import { Text, View } from "react-native";
import {Link} from "expo-router";
export default function Index() {
  return (
    <View
        className="flex-1 bg-orange-300 justify-center items-center"
    >

        <Text className="text-3xl ">Home</Text>

        <Link href="/sign-in">Sign in</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/properties/1">Properits details</Link>

    </View>
  );
}
