import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, TouchableOpacity, View, Image} from "react-native";

export default function EventItem({id, name, description, qrCode}) {
    const navigation = useNavigation()

    return ( 
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Event", {eventId: id, name, description})}>
            <View>
              <Text>{name}</Text>
              <Text>{description}</Text>
            </View>
            <Image
              style={{width:100, height:100}}
              source={{ uri: qrCode }}
            />
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'space-round',
      borderWidth: 1,
      borderColor: '#c5c5c5',
      borderRadius: 10,
      marginVertical: 5,
      padding: 30,
    },
  });
 
