import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
// import {  } from "react-native-gesture-handler";
import { Button, Block, Text, Divider } from "../components";
import { theme, mocks } from "../constants";
const { width, height } = Dimensions.get("window");
class Product extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button onPress={() => {}}>
          <Text>dots</Text>
        </Button>
      ),
    };
  };
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
});
