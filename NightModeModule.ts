import {NativeModules} from 'react-native';

export default class NightModeModule {
  private static module = NativeModules.NightModeBridgeModule;

  public static setNightModeYes() {
    NightModeModule.module.setNightModeYes();
  }

  public static setNightModeNo() {
    NightModeModule.module.setNightModeNo();
  }
}
