import AddItem from './views/AddItem';
import Stats from './views/Stats';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Login from './views/Login';

const AppNavigator = createSwitchNavigator(
  {
    LoginRt:Login,
    ItemRT: AddItem,
    StatsRT: Stats
  },
  {
    //hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
)

export default createAppContainer(AppNavigator);
