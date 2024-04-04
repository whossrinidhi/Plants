import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  FlatList,
  View,
} from "react-native";
import { Button, Block, Text, Divider } from "../components";
import { theme, mocks } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");
class Product extends React.Component {
  renderGallery() {
    const { product } = this.props;
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        data={product.images}
        keyExtractor={(item, index) => `${item}`}
        renderItem={({ item }) => (
          <Image
            source={item}
            resizeMode="contain"
            style={{ width, height: height / 3.1 }}
          />
        )}
      />
    );
  }
  render() {
    const { product } = this.props;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {this.renderGallery()}
        <Block style={styles.product}>
          <Text h2 bold>
            {product.name}
          </Text>
          <Block flex={false} row margin={[theme.sizes.base, 0]}>
            {product.tags.map((tag) => (
              <Text key={`tag-${tag}`} caption gray style={styles.tag}>
                {tag}
              </Text>
            ))}
          </Block>
          <Text gray light height={22}>
            {product.description}
          </Text>
          <Divider margin={[theme.sizes.padding * 0.9, 0]} />
          <Block>
            <Text semibold>Gallery</Text>
            <Block row margin={[theme.sizes.padding * 0.9, 0]}>
              {product.images.slice(1, 3).map((image, index) => (
                <Image
                  key={`gallery-${index}`}
                  source={image}
                  style={styles.image}
                />
              ))}
              <Block
                flex={false}
                card
                center
                middle
                color="rgba(197,204,214,0.20)"
                style={styles.more}
              >
                <Text gray>+{product.images.slice(3).length}</Text>
              </Block>
            </Block>
          </Block>
        </Block>
        <Block style={{ width: width / 3.678 }}>
          <LinearGradient
            locations={[0.5, 1]}
            style={styles.footer}
            colors={["rgba(255,255,255,0)", "rgba(255,255,255,0.6)"]}
          >
            <Button
              gradient
              onPress={() => this.props.navigation.navigate("Cameraa")}
            >
              <Text bold white center>
                see on camera
              </Text>
            </Button>
            <View style={styles.space} />
            <Button
              gradient
              onPress={() => this.props.navigation.navigate("Cart")}
            >
              <Text bold white center>
                add to cart
              </Text>
            </Button>
          </LinearGradient>
        </Block>
      </ScrollView>
    );
  }
}

Product.defaultProps = {
  product: mocks.products[0],
};

export default Product;

const styles = StyleSheet.create({
  product: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingVertical: theme.sizes.padding,
  },
  tag: {
    borderColor: theme.colors.gray2,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: theme.sizes.base,
    paddingHorizontal: theme.sizes.base,
    paddingVertical: theme.sizes.base / 2.5,
    marginRight: theme.sizes.base * 0.625,
  },
  image: {
    width: 115,
    height: 115,
    marginRight: theme.sizes.base,
  },
  more: {
    width: 55,
    height: 55,
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
  space: {
    width: 2,
    height: 1,
  },
});
