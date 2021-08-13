import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import Amplify, { DataStore, Storage, API, graphqlOperation } from "aws-amplify";
import { S3Image } from "aws-amplify-react-native";
import awsconfig from "./src/aws-exports";
import { Photo } from "./src/models";
import * as ImagePicker from "expo-image-picker";
import uuid from "react-native-uuid";


Amplify.configure(awsconfig);

export default function App() {
  const [savedPhotos, setSavedPhotos] = useState([]);
  const [newPhotos, setNewPhotos] = useState([]);

  const pick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      setNewPhotos((prev) => [...prev, { uri: result.uri }]);
    }
  };

  const save = async () => {
    // upload images to S3
    const photosToUpload = newPhotos.map(async (item) => {
      const photo = await fetch(item.uri);
      const photoBlob = await photo.blob();
      const uploadedPhoto = await Storage.put(
        `images/${uuid.v4()}.jpg`,
        photoBlob,
        {
          level: "public",
          contentType: "image/jpg",
        }
      );

      return uploadedPhoto;
    });

    const uploadedToS3 = await Promise.all(photosToUpload);

    // save uploaded image keys to DataStore
    const photosToSave = uploadedToS3?.map((item) => {
      return DataStore.save(new Photo(item));
    });

    const savedToDataStore = await Promise.all(photosToSave);
    console.log({ savedToDataStore });

    setNewPhotos([]);
  };

  const deletePhoto = async (id) => {
    try {
      const deletedPhoto = await DataStore.delete(Photo, id);
      console.log({deletedPhoto})
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      const savedPhotos = await DataStore.query(Photo);
      setSavedPhotos(savedPhotos);
    })();

    const subscription = DataStore.observe(Photo).subscribe({
      next: async ({ element, opType }) => {
        switch (opType) {
          case "INSERT":
            const inserted = await DataStore.query(Photo);
            setSavedPhotos(inserted);
            break;
          case "UPDATE":
            const updated = await DataStore.query(Photo);
            setSavedPhotos(updated);
          case "DELETE":
            const deleted = await DataStore.query(Photo);
            setSavedPhotos(deleted);
        }
      },
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      {newPhotos?.length ? (
        <View style={styles.container}>
          <View style={styles.textBox}>
            <Text>New Photos</Text>
          </View>
          <View style={styles.imageBox}>
            {newPhotos.map(({ uri }) => {
              return (
                <Image
                  key={uri}
                  source={{ uri }}
                  style={{
                    borderRadius: 10,
                    margin: 5,
                    width: 100,
                    height: 100,
                  }}
                />
              );
            })}
          </View>
        </View>
      ) : (
        <View style={styles.textBox}>
          <Text>No Images Selected</Text>
        </View>
      )}

      {savedPhotos?.length ? (
        <View style={styles.container}>
          <View style={styles.textBox}>
            <Text>Saved Images</Text>
          </View>
          <View style={styles.imageBox}>
            {savedPhotos.map(({ id, key }) => {
              return (
                <View key={id}>
                  <S3Image
                    imgKey={key}
                    style={{
                      borderRadius: 10,
                      margin: 5,
                      width: 100,
                      height: 100,
                    }}
                  />
                  <Button title="Delete" onPress={() => deletePhoto(id)} />
                </View>
              );
            })}
          </View>
        </View>
      ) : (
        <View style={styles.textBox}>
          <Text>No Saved Photos</Text>
        </View>
      )}
      <Button title={"Pick From Gallery"} onPress={pick} />
      <Button title={"Save Images"} onPress={save} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  textBox: {},
  imageBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
