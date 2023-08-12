import { View, Text, StyleSheet, FlatList, RefreshControl } from "react-native";
import { DUMMY_DATA } from "../../data/dummy";
import EventItem from "./event-item";

export default function EventList() {
    const renderItem = ({item}) => {
        return  <EventItem id={item.id} title={item.title} description={item.description} />
    }
    return ( 
        <View style={styles.screen}>
            <FlatList
                data={DUMMY_DATA}
                keyExtractor={item=> item.id}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl 
                        refreshing={false}
                        onRefresh={()=> console.log('refreshing...')}
                    />   
                }
            />
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
      padding: 20,
    },
  });
 
