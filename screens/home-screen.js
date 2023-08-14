import { View, StyleSheet } from "react-native";
import EventList from "../components/events/event-list";
import { useEffect, useState } from "react";

export default function HomeScreen() {

    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(false)

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
            <EventList data={data} onRefresh={handleRefresh}/>
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
      padding: 20,
    },
  });
 
