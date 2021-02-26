import React, {useCallback, useEffect} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import Image from 'react-native-fast-image';
import {useTheme} from '@react-navigation/native';
import {connect} from 'react-redux';
import {FETCH_PHOTO, REQUEST} from '../../constants/reducerTypes';
import styles from '../../../commonStyle';

const Home = ({photos, fetchPhotos}) => {
  const {colors} = useTheme();

  useEffect(() => {
    fetchPhotos();
  }, []);

  const _keyExtractor = useCallback((item, index) => `${item.id}_${index}`, []);

  const _renderItem = useCallback(({item}) => {
    return (
      <Image
        source={{uri: item.url}}
        style={{
          height: 200,
          width: 300,
        }}
        resizeMode="cover"
      />
    );
  }, []);

  return (
    <FlatList
      data={photos.data}
      horizontal
      keyExtractor={_keyExtractor}
      renderItem={_renderItem}
      removeClippedSubviews
      maxToRenderPerBatch={6}
      initialNumToRender={6}
      windowSize={11}
      onEndReached={(distanceFromEnd) => {
        if (distanceFromEnd < 0) return;
        fetchPhotos();
      }}
      ItemSeparatorComponent={() => <View style={{width: 10}}></View>}
      ListFooterComponent={() => {
        return (
          <View style={[styles.flex, styles.center]}>
            <ActivityIndicator animating size="large" color={colors.primary} />
          </View>
        );
      }}
    />
  );
};

const mapStateToProps = (store) => {
  return {
    photos: store.photos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: () => dispatch({type: `${FETCH_PHOTO}_${REQUEST}`}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
