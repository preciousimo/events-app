import { View, StyleSheet, Button } from "react-native";
import EventList from "../components/events/event-list";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {

    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(false)

    const navigation = useNavigation()

    const handleRefresh = () => {
      console.log('refreshing')
      setRefresh(prevState => !prevState)
    }
    
    useEffect(()=> {
      fetchData()
    }, [refresh])

    const fetchData = async() => {
      const response = await fetch('http://127.0.0.1:8000/api/events/')
      const data = await response.json()
      setData(data)


    }
    return ( 
        <View style={styles.screen}>
          <Button onPress={() => navigation.navigate('New Event')} title="Add new event" />
            <EventList data={data} onRefresh={handleRefresh}/>
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
      padding: 20,
    },
  });
 
