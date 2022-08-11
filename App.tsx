import { Provider } from 'react-redux'
import { store } from "./redux/store";
import { NavigationContainer } from '@react-navigation/native'
import Root from "./navigations/Root";


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </Provider>
  );
}
