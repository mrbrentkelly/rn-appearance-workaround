package com.appearanceworkaround;

import com.facebook.react.ReactActivity;
import android.content.res.Configuration; // <-- Add this import

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "AppearanceWorkaround";
  }

  // Add this code to get Appearance API to work in Android

  @Override
  public void onConfigurationChanged(Configuration newConfig) {
    super.onConfigurationChanged(newConfig);
    getReactInstanceManager().onConfigurationChanged(this, newConfig);
  }
}
