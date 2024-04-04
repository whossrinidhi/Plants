import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { theme } from "../constants";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login.js";
import SignUp from "../screens/Signup.js";
import Forgot from "../screens/Forgot.js";
import Explore from "../screens/Explore";
import Browse from "../screens/Browse.js";
import Product from "../screens/Product";
import Settings from "../screens/Settings";
import Cart from "../screens/Cart";
import Cameraa from "../screens/Cameraa";
const screens = createStackNavigator(
  {
    Welcome,
    Login,
    SignUp,
    Forgot,
    Explore,
    Browse,
    Product,
    Settings,
    Cart,
    Cameraa,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 5,
        backgroundColor: theme.colors.white, // or 'white
        borderBottomColor: "transparent",
        elevation: 0, // for android only
      },
      headerBackImage: () => (
        <Image source={require("../assets/icons/back.png")} />
      ),
      headerBackTitle: () => null,
      headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base * 2, //for iOS multiply the value by 2
        paddingRight: theme.sizes.base,
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.base,
      },
    },
  }
);

export default createAppContainer(screens);
