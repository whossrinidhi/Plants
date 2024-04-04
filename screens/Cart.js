import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Block, Text, Divider } from "../components";
import { theme, mocks } from "../constants";
const { width, height } = Dimensions.get("window");
class Cart extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold>
            Cart summary
          </Text>
        </Block>
        <Block style={styles.sliders}>
          <Block margin={[10, 0]}>
            <Text gray2 style={{ marginBottom: 10 }}>
              Product
            </Text>
            <Text>{product.name}</Text>
            <Text caption gray right>
              $1,000
            </Text>
            <Text caption gray right>
              QTY: 1
            </Text>
          </Block>
          <Text>Order Summary</Text>
          <Text gray2 style={{ marginBottom: 10 }}>
            Total
          </Text>
          <Text caption gray right>
            $1,000
          </Text>
        </Block>

        <Block style={{ width: width / 3.678 }}>
          <LinearGradient
            locations={[0.5, 1]}
            style={styles.footer}
            colors={["rgba(255,255,255,0)", "rgba(255,255,255,0.6)"]}
          >
            <Button gradient style={{ width: width / 2.678 }}>
              <Text bold white center>
                Checkout
              </Text>
            </Button>
          </LinearGradient>
        </Block>
      </Block>
    );
  }
}

Cart.defaultProps = {
  product: mocks.products[0],
};

export default Cart;
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    overflow: "visible",
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.1,
    width,
    paddingBottom: 2,
  },
  sliders: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2,
  },
});
