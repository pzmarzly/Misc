# Wyłączanie
## Wyłączanie ekranu
### Lock
* np. [tu](http://musicm122.blogspot.com/2011/10/locking-and-unlocking-android-phone.html)
### Cygery external - syf!
* `am start -n com.cygery.screenbacklightoff.xda/com.cygery.screenbacklightoff.RunShortcutActivity` LUB
* `am start -n com.cygery.screenbacklightoff/com.cygery.screenbacklightoff.RunShortcutActivity`
### /sys/class
* `echo 4 > /sys/class/lcd/panel/lcd_power` LUB
* `echo 1 > /sys/class/backlight/panel/bl_power`
## Tryb samolotowy
* `settings put global airplane_mode_on 1` >4.2 LUB
* `settings put system airplane_mode_on 1` LUB
* `sqlite3 /data/data/com.android.providers.settings/databases/settings.db "update system set value='1' where name='airplane_mode_on';"` ORAZ
* `am broadcast -a android.intent.action.AIRPLANE_MODE --ez state true`
## Battery saver
* `settings put global low_power 1`
## Kill
* `pm disable com.android.systemui`
* `pm disable com.cyanogenmod.trebuchet`
## Sync
* `ContentResolver.setMasterSyncAutomatically(false);`
* `<uses-permission android:name="android.permission.WRITE_SYNC_SETTINGS" />`

# Włączanie
## Unlock
* `pm enable com.android.systemui`
* `am startservice -n com.android.systemui/.SystemUIService`
* [Tapeta](http://stackoverflow.com/questions/22856662/how-do-i-refresh-the-wallpaper-image-without-reboot-after-restarting-the-android)
* `pm enable com.cyanogenmod.trebuchet`
## Battery saver
* `settings put global low_power 0`
## Tryb samolotowy
* `settings put global airplane_mode_on 0` >4.2 LUB
* `settings put system airplane_mode_on 0` LUB
* `sqlite3 /data/data/com.android.providers.settings/databases/settings.db "update system set value='0' where name='airplane_mode_on';"` ORAZ
* `am broadcast -a android.intent.action.AIRPLANE_MODE --ez state false`
## Sync
* `ContentResolver.setMasterSyncAutomatically(true);`
## Ekran
### Unlock
* [tu](http://androideasylessons.blogspot.com/2012/09/lockunlock-android-phone-programatically.html)
* `echo 0 > /sys/class/lcd/panel/lcd_power` LUB
* `echo 0 > /sys/class/backlight/panel/bl_power`