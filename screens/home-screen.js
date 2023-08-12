import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import EventList from "../components/events/event-list";

export default function HomeScreen() {
    const navigation = useNavigation()
    return ( 
        <View style={styles.screen}>
            <EventList />
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
      padding: 20,
    },
  });
 
