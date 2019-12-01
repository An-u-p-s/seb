package anups.upsc.prep.js;

import android.app.Activity;
import android.content.Context;
import android.webkit.JavascriptInterface;
import anups.upsc.prep.app.AndroidWebScreen;
import anups.upsc.prep.util.AndroidLogger;

public class AppPermissions extends Activity {
  org.apache.log4j.Logger logger = AndroidLogger.getLogger(AppPermissions.class);
  Context mContext;
  public AppPermissions(Context c) {  mContext = c; }
	
  @JavascriptInterface
  public String doesPermissionExist(String permission){ 
   boolean status=((AndroidWebScreen) mContext).doesPermissionExist(permission);
   return Boolean.toString(status);
  }
	
  @JavascriptInterface
  public void makeAPermission(String permissions){
	  String[] perm = permissions.split(",");
	  ((AndroidWebScreen) mContext).makeAPermission(perm);
	}
  
  
}
