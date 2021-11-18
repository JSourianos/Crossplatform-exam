import React from "react";
import {Text, View, StyleSheet} from "react-native";

//NOTE: This component will take the data from the API. Have to be reusable, as we might display many different stats in these.
type Props = {
    cases: number
}

const StatsDisplay = ({cases}: Props) => {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>Total covid cases</Text>
                <Text>{cases}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Total vaccinations</Text>
                <Text>12047839</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        backgroundColor: "#FAF9F6",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    infoContainer: {
        marginTop: 10,
    },
    label: {
        fontWeight: "bold",
        fontSize: 16,
    }
})

export default StatsDisplay;
