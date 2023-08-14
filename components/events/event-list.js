import { View, Text, StyleSheet, FlatList, RefreshControl } from "react-native";
// import { DUMMY_DATA } from "../../data/dummy";
import EventItem from "./event-item";

export default function EventList({data, onRefresh}) {
    const renderItem = ({item}) => {
        return  <EventItem id={item.id} name={item.name} description={item.description} qrCode={item.qr_code}/>
    }
    return ( 
        <View style={styles.screen}>
            <FlatList
                data={data}
                keyExtractor={item=> item.id}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl 
                        refreshing={false}
                        onRefresh={onRefresh}
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
 
