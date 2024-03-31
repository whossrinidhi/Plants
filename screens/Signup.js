import React from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

export default class SignUp extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    email: null,
    username: null,
    password: null,
    errors: [],
    loading: false,
  };
  handleSignUp() {
    const { email, username, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (!email) errors.push("email");
    if (!username) errors.push("username");
    if (!password) errors.push("password");

    this.setState({ errors, loading: false });

    if (!errors.length) {
      Alert.alert(
        "Success!",
        "Your account has been created",
        [
          {
            text: "Continue",
            onPress: () => {
              this.props.navigation.navigate("Browse");
            },
          },
        ],
        { cancelable: false }
      );
    }
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.signup} behavior="padding">
        <Block padding={[3, theme.sizes.base * 2]}>
          <Text h1 bold>
            Sign Up
          </Text>
          <Block middle>
            <Input
              email
              label="Email"
              style={[styles.input]}
              defaultValue={this.state.email}
              onChangeText={(text) => this.setState({ email: text })}
            />
            <Input
              label="Username"
              style={[styles.input]}
              defaultValue={this.state.username}
              onChangeText={(text) => this.setState({ username: text })}
            />
            <Input
              secure
              label="Password"
              style={[styles.input]}
              defaultValue={this.state.password}
              onChangeText={(text) => this.setState({ password: text })}
            />

            <Button gradient onPress={() => this.handleSignUp()}>
              <Text bold white center>
                Sign Up
              </Text>
            </Button>

            <Button onPress={() => this.props.navigation.navigate("Welcome")}>
              <Text
                gray
                caption
                center
                style={{ textDecorationLine: "underline" }}
              >
                Back to Login
              </Text>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});
