import React from "react";
import { Button, Block, Text, Input } from "../components";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { theme } from "../constants";
const VALID_EMAIL = "kriss @kriss.com";
export default class Forgot extends React.Component {
  state = {
    email: VALID_EMAIL,
    errors: [],
    loading: false,
  };
  handleForgot() {
    Alert.alert("Password Sent!", "Please check your emailID.");
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.forgot} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>
            Forgot
          </Text>
          <Block middle>
            <Input
              label="Email"
              style={[styles.input]}
              defaultValue={this.state.email}
              onChangeText={(text) => this.setState({ email: text })}
            />
            <Block middle>
              <Input
                label="Email"
                style={[styles.input]}
                defaultValue={this.state.email}
                onChangeText={(text) => this.setState({ email: text })}
              />
              <Button gradient onPress={() => this.handleForgot()}>
                <Text bold white center>
                  Forgot
                </Text>
              </Button>

              <Button onPress={() => this.props.navigation.navigate("Login")}>
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
        </Block>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  forgot: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
