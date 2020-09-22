# Setup

```
> git clone git@github.com:mrbrentkelly/rn-appearance-workaround.git
> cd rn-appearance-workaround
> yarn
> yarn android
```

# Add workaround to your own project

1. Open `MainActivity.java`.

2. Import `Configuration` class.

```java
import android.content.res.Configuration; 
```

3. Override `onConfigurationChanged`.

```java
  @Override
  public void onConfigurationChanged(Configuration newConfig) {
    super.onConfigurationChanged(newConfig);
    getReactInstanceManager().onConfigurationChanged(this, newConfig);
  }
```

4. That's it :tada: