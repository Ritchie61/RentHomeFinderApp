import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen – Listings will appear here</Text>
      <Button
        title="Add Listing"
        onPress={() => navigation.navigate('AddListing')}
      />
    </View>
  );
}
