import React, {useState, useEffect, useContext, useReducer} from 'react';
import {StyleSheet, Switch, Text, TextInput, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {SettingsContext} from '../../App';
import StyledSafeView from '../StyledSafeView';
import WhiteText from '../WhiteText';

const Settings = () => {
  const {state: settings, dispatch} = useContext(SettingsContext);

  const onValueChange = ({key, value}) => {
    (async () => {
      const newSettings = {...settings, [key]: value};
      await AsyncStorage.setItem('settings', JSON.stringify(newSettings));
      dispatch({type: 'updateContext', settings: newSettings});
    })();
  };

  return (
    <StyledSafeView>
      <View style={styles.mainView}>
        <View
          style={{
            padding: 15,
            width: '100%',
            borderBottomWidth: 2,
            borderBottomColor: '#f0f6f0',
            alignItems: 'center',
          }}>
          <WhiteText fontSize={28}>Settings</WhiteText>
        </View>
        <Text
          style={[
            styles.whiteText,
            {
              paddingHorizontal: 15,
              paddingTop: 10,
              width: '100%',
              fontWeight: 'bold',
              fontSize: 18,
            },
          ]}>
          Name
        </Text>
        <UserSettings onValueChange={onValueChange} />
        <SettingRow
          title={'High-Quality'}
          body={
            'Makes everything on the app high quality. You probably want this on, but it uses a TON of data.'
          }
          onValueChange={onValueChange}
        />
        <SettingRow
          title={'Anonymous Data'}
          body={
            'Allow the app to collect anonymous data. (Including but not limited to: blood type, SSN, credit card, embarrassing photos)'
          }
          onValueChange={onValueChange}
        />
        <SettingRow
          title={'Offline Mode'}
          body={
            'Disables your Wi-Fi and cellular connections. True offline mode.'
          }
          onValueChange={onValueChange}
        />
        <SettingRow
          title={'Performance Boost'}
          body={'Downloads extra RAM for increased performance.'}
          onValueChange={onValueChange}
        />
      </View>
    </StyledSafeView>
  );
};

const UserSettings = ({onValueChange}) => {
  const {state: settings} = useContext(SettingsContext);
  const [name, setName] = useState('');

  useEffect(() => {
    if (settings.name) {
      setName(settings.name);
    }
  }, [settings]);

  const handleChange = value => {
    onValueChange({key: 'name', value});
    setName(value);
  };

  return (
    <View style={styles.inputView}>
      <TextInput
        style={[styles.whiteText, styles.input]}
        placeholder={'Name'}
        placeholderTextColor={'#a0a6a0'}
        value={name}
        onChangeText={value => {
          handleChange(value);
        }}
      />
    </View>
  );
};

const SettingRow = ({title, body, onValueChange}) => {
  return (
    <View style={styles.settingRow}>
      <View>
        <Text style={[styles.whiteText, styles.settingTitleText]}>{title}</Text>
        <Text
          style={[styles.whiteText, styles.settingBodyText]}
          textBreakStrategy={'simple'}>
          {body}
        </Text>
      </View>
      <SettingSwitch title={title} onValueChange={onValueChange} />
    </View>
  );
};

const SettingSwitch = ({title, onValueChange = () => {}}) => {
  const {state: settings} = useContext(SettingsContext);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(settings[title] ?? false);
  }, [settings, title]);

  const handleChange = () => {
    onValueChange({key: title, value: !enabled});
    setEnabled(!enabled);
  };

  return <Switch onValueChange={handleChange} value={enabled} />;
};

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    backgroundColor: '#101520',
    height: '100%',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pictureRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  userIcon: {
    width: 64,
    height: 64,
  },
  settingRow: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  whiteText: {
    color: '#f0f6f0',
  },
  settingTitleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  settingBodyText: {
    flexWrap: 'wrap',
    flexShrink: 1,
    maxWidth: '87%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderBottomWidth: 4,
    borderRadius: 10,
    borderColor: '#f0f6f0',
    padding: 10,
    fontSize: 14,
  },
  inputView: {
    width: '100%',
  },
});

export default Settings;
