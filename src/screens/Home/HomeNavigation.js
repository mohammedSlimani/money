import { createDrawerNavigator } from "react-navigation";
import AddItemScreen from "./AddItem/AddItemScreen";
import StatsScreen from "./Stats/StatsScreen";

const HomeDrawer = createDrawerNavigator({
	AddItemScreen: {
		screen: AddItemScreen
	},

	StatsScreen: {
		screen: StatsScreen
	}
});

export default HomeDrawer;
