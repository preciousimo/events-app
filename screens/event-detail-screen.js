import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";

export default function EventDetailScreen() {
    const route = useRoute()
    const navigation = useNavigation()

    const { eventId, name, description } = route.params

    useLayoutEffect(()=> {
      navigation.setOptions({
        headerTitle: name,
        headerLeft: () => (
          <HeaderBackButton
            tintColor="white"
            onPress={()=> navigation.goBack() } 
          />
        )
      })
    }, [])

    return ( 
        <View style={styles.screen}>
            <Text style={{fontSize: 20}}>This is event detail screen for {eventId}</Text>
            <Text style={{fontSize: 14}}>{name}</Text>
            <Text style={{fontSize: 14}}>{description}</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
      padding: 20,
    },
  });
 
