import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {nameApi} from '../redux/NameApi/nameApi';

export default function Home() {
  const [doSearch, result] = nameApi.useLazyGetAgeQuery();

  const [text, setText] = React.useState('');

  const doGoSearch = React.useCallback(() => {
    doSearch(text);
  }, [doSearch, text]);

  return (
    <View style={{height: '100%'}}>
      <Text>Home</Text>

      <View style={{flexDirection: 'row', marginTop: 50, alignItems: 'center'}}>
        <Text>Name</Text>
        <View style={{width: 10}} />
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 2,
            flex: 1,
            height: 50,
          }}
          value={text}
          onChangeText={v => setText(v)}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            width: 50,
            alignItems: 'center',
            margin: 5,
            padding: 5,
          }}
          onPress={doGoSearch}>
          <Text>Go</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginTop: 50}}>
        <Text>Answer</Text>
        <View style={{width: 10}} />
        <Text>{result.data?.age}</Text>
      </View>
    </View>
  );
}
