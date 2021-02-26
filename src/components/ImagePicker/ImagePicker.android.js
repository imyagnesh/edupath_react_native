import React, {useState} from 'react';
import {View, Pressable, useWindowDimensions} from 'react-native';
import Modal from 'react-native-modal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import EPText from '../EPText';
import styles from '../../../commonStyle';

const ImagePicker = ({onSelectImage}) => {
  const {width} = useWindowDimensions();
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <Pressable onPress={() => setIsModalVisible(true)}>
        <EPText>Select Image</EPText>
      </Pressable>
      <Modal isVisible={isModalVisible}>
        <View style={[styles.flex, styles.center]}>
          <View
            style={[
              styles.padding12,
              {backgroundColor: '#fff', width: width * 0.8},
            ]}>
            <EPText variant="h1" style={[styles.paddingV8]}>
              Select Image
            </EPText>
            <Pressable
              style={[styles.paddingV8]}
              onPress={() =>
                launchCamera(
                  {
                    mediaType: 'photo',
                    includeBase64: false,
                    maxHeight: 200,
                    maxWidth: 200,
                  },
                  (response) => {
                    setIsModalVisible(false);
                    onSelectImage(response);
                  },
                )
              }>
              <EPText variant="h2">Take Photo...</EPText>
            </Pressable>
            <Pressable
              style={[styles.paddingV8]}
              onPress={() =>
                launchImageLibrary(
                  {
                    mediaType: 'photo',
                    includeBase64: false,
                    maxHeight: 200,
                    maxWidth: 200,
                  },
                  (response) => {
                    setIsModalVisible(false);
                    onSelectImage(response);
                  },
                )
              }>
              <EPText variant="h2">Choose From Library...</EPText>
            </Pressable>
            <Pressable
              style={[styles.paddingV8, {alignSelf: 'flex-end'}]}
              onPress={() => setIsModalVisible(false)}>
              <EPText variant="h1" style={{fontSize: 16}}>
                CANCEL
              </EPText>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ImagePicker;
