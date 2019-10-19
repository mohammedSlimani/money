import { createDrawerNavigator } from "react-navigation";
import AddItemScreen from "./AddItem/AddItemScreen";
import StatsScreen from "./Stats/StatsScreen";

const HomeDrawer = createDrawerNavigator(
    {
        AddItemScreen : AddItemScreen,
        StatsScreen : StatsScreen
    }
)

export default HomeDrawer;