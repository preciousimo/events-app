import { useNavigation } from "@react-navigation/native";
import { Button, View, Text } from "react-native";

export default function HomeScreen() {
    const navigation = useNavigation()
    return ( 
        <View>
            <Text>Profile screen</Text>
            <Button title="some profile" onPress={()=>navigation.navigate('Profile', {profileId: 1})} />
        </View>
     );
}
