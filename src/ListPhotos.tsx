import React, {useEffect, useState, useCallback} from 'react';
import { Avatar, Button, Card, Text as Tex } from 'react-native-paper';

import {
  StatusBar,
  Text,
  View,
  Image,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Styles';
import {
  listFiles,
  getThetaInfo,
  FileTypeEnum,
  FileInfo,
} from 'theta-client-react-native';

const listPhotos = async () => {
  const {fileList} = await listFiles(FileTypeEnum.IMAGE, 0, 1000);
  return fileList;
};

const ListPhotos = ({navigation}) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [files, setFiles] = useState<FileInfo[]>([]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setFiles(await listPhotos());
    setRefreshing(false);
  }, []);

  useEffect(() => {
    const init = async () => {
      const info = await getThetaInfo();
      navigation.setOptions({title: `${info.model}:${info.serialNumber}`});
      await onRefresh();
    };
    init();
  }, [onRefresh, navigation]);

  const onSelect = (item: FileInfo) => {
    navigation.navigate('sphere', {item: item});
  };

  // const items = files.map(item => (
  //   <TouchableOpacity
  //     style={styles.fileItemBase}
  //     key={item.name}
  //     onPress={() => onSelect(item)}>
  //     <Image style={styles.thumbnail} source={{uri: item.thumbnailUrl}} />
  //     <View
  //       style={{
  //         width: Dimensions.get('window').width - 108,
  //       }}>
  //       <View style={styles.largeSpacer} />
  //       <Text style={styles.fileName}>{item.name}</Text>
  //       <View style={styles.largeSpacer} />
  //     </View>
  //   </TouchableOpacity>
  // ));
  const LeftContent = props => <Avatar.Text size={40} label="IM" />;

  const items = files.map(item => (
    <TouchableOpacity
      style={styles.cardWrapper}
      key={item.name}
      onPress={() => onSelect(item)}>
    
      <Card style={styles.card}>
        <Card.Title 
          title="Photo" 
          subtitle={item.dateTimeZone} 
          left={LeftContent} 
        />
        <Card.Content>
          <Tex variant="titleLarge">{item.name}</Tex>
          <Tex variant="bodyMedium">{item?.imageDescription || 'Simple Image'}</Tex>
        </Card.Content>
        <Card.Cover source={{ uri: item.thumbnailUrl }} />
        <Card.Actions>
          <Button onPress={() => onSelect(item)}>View</Button>
        </Card.Actions>
      </Card>
    </TouchableOpacity>
  ));
  return (
    <SafeAreaView style={styles.listContainer} edges={['left', 'right', 'bottom']}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={styles.scrollViewContent}>
        {items}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListPhotos;
