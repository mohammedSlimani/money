import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AuthLoadingScreen from "./screens/AuthLoading/AuthLoadingScreen";
import AuthScreen from "./screens/Auth/AuthScreen";
import HomeDrawer from "./screens/Home/HomeNavigation";

const AppNavigator = createSwitchNavigator(
	{
		AuthLoading: AuthLoadingScreen,
		Auth: AuthScreen,
		Home: HomeDrawer
	},
	{
		initialRouteName: "AuthLoading"
	}
);

export default createAppContainer(AppNavigator);
