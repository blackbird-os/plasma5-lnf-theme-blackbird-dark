applet.currentConfigGroup = ["General"]
applet.writeConfig("extraItems","org.kde.plasma.battery,org.kde.plasma.bluetooth,org.kde.plasma.keyboardindicator,org.kde.plasma.printmanager,org.kde.plasma.clipboard,org.kde.plasma.networkmanagement,org.kde.plasma.devicenotifier,org.kde.plasma.diskquota,org.kde.plasma.nightcolorcontrol,Cadence,Yakuake")
applet.writeConfig("knownItems","org.kde.plasma.notifications,org.kde.plasma.battery,org.kde.plasma.volume,org.kde.plasma.bluetooth,org.kde.discovernotifier,org.kde.plasma.keyboardindicator,org.kde.kdeconnect,org.kde.plasma.printmanager,org.kde.plasma.clipboard,org.kde.plasma.volumewin7mixer,org.kde.plasma.networkmanagement,org.kde.plasma.devicenotifier,org.kde.plasma.mediacontroller")
applet.writeConfig("hiddenItems","org.kde.plasma.clipboard,org.kde.plasma.volumewin7mixer,Yakuake")
applet.writeConfig("shownItems", "transmission,vokoscreen,yarock,Cadence")
applet.reloadConfig()
