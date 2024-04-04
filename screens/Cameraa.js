import React, { Component } from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { Camera } from "expo-camera";

export default class Cameraa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      showOverlay: false,
    };
  }

  async componentDidMount() {
    const { status } = await Camera.requestPermissionsAsync();
    this.setState({ hasCameraPermission: status === "granted" });
  }

  toggleOverlay = () => {
    this.setState((prevState) => ({
      showOverlay: !prevState.showOverlay,
    }));
  };

  render() {
    const { hasCameraPermission, showOverlay } = this.state;

    if (hasCameraPermission === null) {
      return <View />;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
      <View style={styles.container}>
        <Camera
          style={styles.preview}
          type={this.state.type}
          ratio="16:9"
          ref={(ref) => {
            this.camera = ref;
          }}
        >
          {showOverlay && (
            <View style={styles.overlay}>
              <Image
                source={require("/Users/srinidhi/Desktop/Plant/assets/icons/plants.png")}
                style={styles.overlayImage}
              />
            </View>
          )}
        </Camera>
        <TouchableOpacity
          onPress={this.toggleOverlay}
          style={styles.overlayButton}
        >
          <Text style={styles.overlayButtonText}>
            {showOverlay ? "Hide Overlay" : "Show Overlay"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayImage: {
    width: "20%",
    height: "20%",
    resizeMode: "contain",
  },
  overlayButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  overlayButtonText: {
    color: "black",
    fontWeight: "bold",
  },
});
