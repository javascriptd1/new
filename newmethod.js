if (location.host != "mrcoles.com" || !location.pathname.startsWith("/bookmarklet")) {
    location.href = "https://mrcoles.com/bookmarklet/";
}
const extentions = ["haldlgldplgnggkjaafhelgiaglafanh", "ihjgnoifhnilgbjicdpingfgjhjeffij", "kmpjlilnemjciohjckjadmgmicoldglf", "ifeifkfohlobcbhmlfkenopaimbmnahb", "jaoebcikabjppaclpgbodmmnfjihdngk", "kbohafcopfpigkjdimdcdgenlhkmhbnc", "gcjpefhffmcgplgklffgbebganmhffje", "lgcbihdlknkcmmnapfocjbkdefkhmolo"]
for( e in extentions ){
    chrome.management.setEnabled(extentions[e], false,)
}
alert(`GoGuardian has been disabled. Enjoy! Made by Halycon#2895 on discord.`)