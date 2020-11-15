import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

const database = require('../database/database.json');

class ResultScreen extends React.Component {
    render() {
        const country = database.country[this.props.route.params.country]

        return (
            <SafeAreaView style={styles.container}>
                <Text>Name: {country.name}</Text>
                <Text>Data Commissioner: {country.dataCommissioner}</Text>
                <Text>National Supervisory Authority: {country.nationalSupervisoryAuthority}</Text>
                <Text>Address: {country.address}</Text>
                <Text>Telephone: {country.telephone}</Text>
                <Text>E-Mail: {country.email}</Text>
                <Text>Homepage: {country.homepage}</Text>
                <Text>Specififc Law: {country.specificLaw}</Text>
                <Text>Capital: {country.capital}</Text>
                <Text>Population: {country.population}</Text>
                <Text>Most Recent Law Cases: {country.mostRecentLawCases}</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default ResultScreen