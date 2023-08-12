import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function EventItem({id, title, description}) {
    const navigation = useNavigation()

    return ( 
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Event", {eventId: id, title, description})}>
            <Text>{title}</Text>
            <Text>{description}</Text>
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    card: {
      borderWidth: 1,
      borderColor: '#c5c5c5',
      borderRadius: 10,
      marginVertical: 5,
      padding: 30,
    },
  });
 
