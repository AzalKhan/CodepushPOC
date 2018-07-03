Readme will lets youknow how we have setup CodePush

1. sudo npm -g code-push-cli

2. code-push register

3. code-push app add codepushapp android cordova

Successfully added the "codepushapp" app, along with the following default deployments:
┌────────────┬──────────────────────────────────────────────────────────────────┐
│ Name       │ Deployment Key                                                   │
├────────────┼──────────────────────────────────────────────────────────────────┤
│ Production │ lV_zdCiGYs5oUTc9_ynID-eWlZUG45d59302-eced-432d-bfb0-dc55590c60a5 │
├────────────┼──────────────────────────────────────────────────────────────────┤
│ Staging    │ coTkUOkhx49Ce-tgNI-3TxSiLxYX45d59302-eced-432d-bfb0-dc55590c60a5 │
└────────────┴──────────────────────────────────────────────────────────────────┘


4.update config file with below tags

    <platform name="android">
        <preference name="CodePushDeploymentKey" value="lV_zdCiGYs5oUTc9_ynID-eWlZUG45d59302-eced-432d-bfb0-dc55590c60a5" />
    </platform>

5. install below plugins
	$ ionic cordova plugin add cordova-plugin-code-push
	$ npm install --save @ionic-native/code-push

6. upadte src/app/app.module.ts file with below code
a) import {CodePush} from '@ionic-native/code-push';

b) providers: [
    StatusBar,
    SplashScreen,
    CodePush,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
]

7. @azal-VirtualBox:~/.jenkins/workspace/CodePush-POC/src/pages/home$ code-push deployment ls codepushapp -k
┌────────────┬──────────────────────────────────────────────────────────────────┬─────────────────────┬──────────────────────┐
│ Name       │ Deployment Key                                                   │ Update Metadata     │ Install Metrics      │
├────────────┼──────────────────────────────────────────────────────────────────┼─────────────────────┼──────────────────────┤
│ Production │ lV_zdCiGYs5oUTc9_ynID-eWlZUG45d59302-eced-432d-bfb0-dc55590c60a5 │ No updates released │ No installs recorded │
├────────────┼──────────────────────────────────────────────────────────────────┼─────────────────────┼──────────────────────┤
│ Staging    │ coTkUOkhx49Ce-tgNI-3TxSiLxYX45d59302-eced-432d-bfb0-dc55590c60a5 │ No updates released │ No installs recorded │


8. run below to release 
a) ionic cordova prepare android
b) code-push release-cordova codepushapp android -m -d "Staging"
c) code-push release-cordova codepushapp android -m -d "Production"


azal@azal-VirtualBox:~/.jenkins/workspace/CodePush-POC$ sudo code-push release codepushapp /src/pages/home/home.html 0.0.1 --description "this my first commnet for this app : azal" -d "Staging"
[Error]  ENOENT: no such file or directory, lstat '/src/pages/home/home.html'
azal@azal-VirtualBox:~/.jenkins/workspace/CodePush-POC$ sudo code-push release codepushapp ./src/pages/home/home.html 0.0.1 --description "this my first commnet for this app : azal" -d "Production"
Upload progress:[==================================================] 100% 0.0s
Successfully released an update containing the "./src/pages/home/home.html" file to the "Production" deployment of the "codepushapp" app.
azal@azal-VirtualBox:~/.jenkins/workspace/CodePush-POC$ sudo code-push release codepushapp ./src/pages/home/home.html 0.0.1 --description "this my first commnet for this app : azal" -d "Production"
Upload progress:[==================================================] 100% 0.0s
[Error]  The uploaded package was not released because it is identical to the contents of the specified deployment's current release.


azal@azal-VirtualBox:~/.jenkins/workspace/CodePush-POC$ sudo code-push release codepushapp /src/pages/home/home.html 0.0.1 --description "this my first commnet for this app : azal" -d "Staging"
[Error]  ENOENT: no such file or directory, lstat '/src/pages/home/home.html'
azal@azal-VirtualBox:~/.jenkins/workspace/CodePush-POC$ sudo code-push release codepushapp ./src/pages/home/home.html 0.0.1 --description "this my first commnet for this app : azal" -d "Production"
Upload progress:[==================================================] 100% 0.0s
Successfully released an update containing the "./src/pages/home/home.html" file to the "Production" deployment of the "codepushapp" app.
azal@azal-VirtualBox:~/.jenkins/workspace/CodePush-POC$ sudo code-push release codepushapp ./src/pages/home/home.html 0.0.1 --description "this my first commnet for this app : azal" -d "Production"
Upload progress:[==================================================] 100% 0.0s
[Error]  The uploaded package was not released because it is identical to the contents of the specified deployment's current release.


azal@azal-VirtualBox:~/.jenkins/workspace/CodePush-POC$ code-push release-cordova codepushapp android -m
Running "cordova prepare" command:

No scripts found for hook "before_prepare".
Checking config.xml and package.json for saved platforms that haven't been added to the project
Config.xml and package.json platforms are the same. No pkg.json modification.
Package.json and config.xml platforms are different. Updating config.xml with most current list of platforms.
PlatformApi successfully found for platform android
Android Studio project detected
Checking config.xml for saved plugins that haven't been added to the project
Checking for any plugins added to the project that have not been installed in android platform
No differences found between plugins added to project and installed in android platform. Continuing...
Generating platform-specific config.xml from defaults for android at /home/azal/.jenkins/workspace/CodePush-POC/platforms/android/app/src/main/res/xml/config.xml
Merging project's config.xml into platform-specific android config.xml
Merging and updating files from [www, platforms/android/platform_www] to platforms/android/app/src/main/assets/www
Wrote out android application name "codepushapp" to /home/azal/.jenkins/workspace/CodePush-POC/platforms/android/app/src/main/res/values/strings.xml
android-versionCode not found in config.xml. Generating a code based on version in config.xml (0.0.1): 1
Wrote out Android package name "io.ionic.starter" to /home/azal/.jenkins/workspace/CodePush-POC/platforms/android/app/src/main/java/io/ionic/starter/MainActivity.java
Updating icons at platforms/android/app/src/main/res
Updating splash screens at platforms/android/app/src/main/res
This app does not have additional resource files defined
Prepared android project successfully
No scripts found for hook "after_prepare".

Releasing update contents to CodePush:

Upload progress:[==================================================] 100% 0.0s
Successfully released an update containing the "/home/azal/.jenkins/workspace/CodePush-POC/platforms/android/app/src/main/assets/www" directory to the "Staging" deployment of the "codepushapp" app.
azal@azal-VirtualBox:~/.jenkins/workspace/CodePush-POC$ code-push release-cordova codepushapp android -m -d "Production"
Running "cordova prepare" command:

No scripts found for hook "before_prepare".
Checking config.xml and package.json for saved platforms that haven't been added to the project
Config.xml and package.json platforms are the same. No pkg.json modification.
Package.json and config.xml platforms are different. Updating config.xml with most current list of platforms.
PlatformApi successfully found for platform android
Android Studio project detected
Checking config.xml for saved plugins that haven't been added to the project
Checking for any plugins added to the project that have not been installed in android platform
No differences found between plugins added to project and installed in android platform. Continuing...
Generating platform-specific config.xml from defaults for android at /home/azal/.jenkins/workspace/CodePush-POC/platforms/android/app/src/main/res/xml/config.xml
Merging project's config.xml into platform-specific android config.xml
Merging and updating files from [www, platforms/android/platform_www] to platforms/android/app/src/main/assets/www
Wrote out android application name "codepushapp" to /home/azal/.jenkins/workspace/CodePush-POC/platforms/android/app/src/main/res/values/strings.xml
android-versionCode not found in config.xml. Generating a code based on version in config.xml (0.0.1): 1
Wrote out Android package name "io.ionic.starter" to /home/azal/.jenkins/workspace/CodePush-POC/platforms/android/app/src/main/java/io/ionic/starter/MainActivity.java
Updating icons at platforms/android/app/src/main/res
Updating splash screens at platforms/android/app/src/main/res
This app does not have additional resource files defined
Prepared android project successfully
No scripts found for hook "after_prepare".

Releasing update contents to CodePush:

Upload progress:[==================================================] 100% 0.0s
Successfully released an update containing the "/home/azal/.jenkins/workspace/CodePush-POC/platforms/android/app/src/main/assets/www" directory to the "Production" deployment of the "codepushapp" app.
azal@azal-VirtualBox:~/.jenkins/workspace/CodePush-POC$ ^C
azal@azal-VirtualBox:~/.jenkins/workspace/CodePush-POC$ ^C
azal@azal-VirtualBox:~/.jenkins/workspace/CodePush-POC$ ionic cordova prepare android
Running app-scripts build: --platform android --target cordova
[15:48:35]  build dev started ... 
[15:48:35]  clean started ... 
[15:48:35]  clean finished in 6 ms 
[15:48:35]  copy started ... 
[15:48:35]  deeplinks started ... 
[15:48:35]  deeplinks finished in 201 ms 
[15:48:35]  transpile started ... 
[15:48:49]  transpile finished in 13.60 s 
[15:48:49]  preprocess started ... 
[15:48:49]  preprocess finished in less than 1 ms 
[15:48:49]  webpack started ... 
[15:48:49]  copy finished in 14.33 s 
[15:48:56]  webpack finished in 6.99 s 
[15:48:56]  sass started ... 
Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.
[15:49:00]  sass finished in 3.87 s 
[15:49:00]  postprocess started ... 
[15:49:00]  postprocess finished in 33 ms 
[15:49:00]  lint started ... 
[15:49:00]  build dev finished in 25.63 s 
> cordova prepare android
Android Studio project detected


[15:49:07]  tslint: src/pages/home/home.ts, line: 11 
            Property 'codePush' is declared but its value is never read. 

      L11:    constructor(public navCtrl: NavController, private codePush: CodePush, private platform: Platform) {

[15:49:07]  tslint: src/pages/home/home.ts, line: 11 
            Property 'platform' is declared but its value is never read. 

      L11:    constructor(public navCtrl: NavController, private codePush: CodePush, private platform: Platform) {

[15:49:07]  lint finished in 7.37 s 
azal@azal-VirtualBox:~/.jenkins/workspace/CodePush-POC$ code-push release-cordova codepushapp android -m -d "Production"
Running "cordova prepare" command:

No scripts found for hook "before_prepare".
Checking config.xml and package.json for saved platforms that haven't been added to the project
Config.xml and package.json platforms are the same. No pkg.json modification.
Package.json and config.xml platforms are different. Updating config.xml with most current list of platforms.
PlatformApi successfully found for platform android
Android Studio project detected
Checking config.xml for saved plugins that haven't been added to the project
Checking for any plugins added to the project that have not been installed in android platform
No differences found between plugins added to project and installed in android platform. Continuing...
Generating platform-specific config.xml from defaults for android at /home/azal/.jenkins/workspace/CodePush-POC/platforms/android/app/src/main/res/xml/config.xml
Merging project's config.xml into platform-specific android config.xml
Merging and updating files from [www, platforms/android/platform_www] to platforms/android/app/src/main/assets/www
Wrote out android application name "codepushapp" to /home/azal/.jenkins/workspace/CodePush-POC/platforms/android/app/src/main/res/values/strings.xml
android-versionCode not found in config.xml. Generating a code based on version in config.xml (0.0.1): 1
Wrote out Android package name "io.ionic.starter" to /home/azal/.jenkins/workspace/CodePush-POC/platforms/android/app/src/main/java/io/ionic/starter/MainActivity.java
Updating icons at platforms/android/app/src/main/res
Updating splash screens at platforms/android/app/src/main/res
This app does not have additional resource files defined
Prepared android project successfully
No scripts found for hook "after_prepare".

Releasing update contents to CodePush:

Upload progress:[==================================================] 100% 0.0s
[Error]  The uploaded package was not released because it is identical to the contents of the specified deployment's current release.



