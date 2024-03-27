import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { theme } from "../constants";
import Welcome from "../screens/Welcome";
import Login from "/Users/srinidhi/Desktop/Plant/screens/Login.js";
import SignUp from "/Users/srinidhi/Desktop/Plant/screens/Signup.js";
// import Forgot from "../screens/Forgot";
// import Explore from "../screens/Explore";
// import Browse from "../screens/Browse";
// import Product from "../screens/Product";
// import Settings from "../screens/Settings";

const screens = createStackNavigator(
  {
    Welcome,
    Login,
    SignUp,
    // Forgot,
    // Explore,
    // Browse,
    // Product,
    // Settings,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
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
