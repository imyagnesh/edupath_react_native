import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Image from 'react-native-fast-image';
import ImagePicker from '../../components/ImagePicker/ImagePicker';

const Settings = () => {
  const [image, setImage] = useState();
  const onSelectImage = useCallback((response) => {
    console.log(response);
    setImage(response);
  }, []);

  return (
    <SafeAreaView>
      <ImagePicker onSelectImage={onSelectImage} />
      {image?.uri && (
        <Image
          source={{
            uri: image.uri,
          }}
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Settings;
