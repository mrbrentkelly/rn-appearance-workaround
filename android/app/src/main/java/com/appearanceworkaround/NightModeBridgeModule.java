package com.appearanceworkaround;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatDelegate;

import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.UiThreadUtil;

import static androidx.appcompat.app.AppCompatDelegate.MODE_NIGHT_NO;
import static androidx.appcompat.app.AppCompatDelegate.MODE_NIGHT_YES;

public class NightModeBridgeModule extends BaseJavaModule {
    @NonNull
    @Override
    public String getName() {
        return "NightModeBridgeModule";
    }

    @ReactMethod
    public void setNightModeYes() {
        UiThreadUtil.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                AppCompatDelegate.setDefaultNightMode(MODE_NIGHT_YES);
            }
        });

    }

    @ReactMethod
    public void setNightModeNo() {
        UiThreadUtil.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                AppCompatDelegate.setDefaultNightMode(MODE_NIGHT_NO);
            }
        });
    }
}
