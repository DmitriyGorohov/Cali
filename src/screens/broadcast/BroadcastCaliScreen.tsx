import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../styles/Colors.ts';
import Header from '../../components/Header.tsx';

const events = [
  {
    id: '1',
    league: 'MLB',
    dateTime: '25.07 - 22:00',
    teams: ['Juventus', 'Barcelona'],
  },
  {
    id: '2',
    league: 'NFL',
    dateTime: '12.07 - 00:15',
    teams: ['Los Angeles Dodgers', 'San Francisco Giants'],
  },
  {
    id: '3',
    league: 'NFL',
    dateTime: '12.07 - 00:15',
    teams: ['Green Bay Packers', 'Chicago Bears'],
  },
  {
    id: '4',
    league: 'NBA',
    dateTime: '10.07 - 00:05',
    teams: ['Golden State Warriors', 'Houston Rockets'],
  },
  {
    id: '5',
    league: 'EPL',
    dateTime: '30.07 - 00:00',
    teams: ['Manchester City', 'Tottenham Hotspur'],
  },
];

const BroadcastCaliScreen = (): React.JSX.Element => {
  const renderEvent = ({ item }: { item: (typeof events)[0] }) => (
    <View style={styles.eventContainer}>
      <View style={styles.leagueBadge}>
        <Text style={styles.leagueText}>{item.league}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.dateTime}>{item.dateTime}</Text>
        <Text style={styles.teams}>{item.teams[0]}</Text>
        <Text style={styles.teams}>{item.teams[1]}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header />
        <Text style={{ color: Colors.black, fontSize: 22, fontWeight: '700', paddingHorizontal: 16, }}>
          Спортивные трансляции
        </Text>
        <FlatList
          data={events}
          renderItem={renderEvent}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  eventContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 12,
  },
  leagueBadge: {
    borderColor: Colors.yellowButton,
    borderWidth: 1,
    height: 80,
    width: 100,
    marginRight: 20,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leagueText: {
    alignSelf: 'center',
    fontSize: 30,
    color: Colors.yellowButton,
    fontWeight: '900',
  },
  detailsContainer: {
    flex: 1,
  },
  dateTime: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  teams: {
    fontSize: 16,
    fontWeight: '900',
    color: Colors.black,
  },
});
export default BroadcastCaliScreen;
