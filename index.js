import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';

import App from './App';

//punto de partida ahre para hacer la app
//le dice a expo cual tiene que ser elprimer componenteen cargar cuando se inicia la app

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
