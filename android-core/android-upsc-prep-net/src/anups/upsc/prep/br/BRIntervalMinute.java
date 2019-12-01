package anups.upsc.prep.br;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import anups.upsc.prep.constants.BusinessConstants;
import anups.upsc.prep.js.AppSessionManagement;
import anups.upsc.prep.notify.ws.WSIntervalMinute;
import anups.upsc.prep.util.AndroidLogger;
import anups.upsc.prep.util.GPSTracker;
import anups.upsc.prep.web.templates.URLGenerator;

public class BRIntervalMinute extends BroadcastReceiver {
 org.apache.log4j.Logger logger = AndroidLogger.getLogger(BRIntervalMinute.class);
	
 @Override
 public void onReceive(Context context, Intent intent) {
	 logger.info("Triggered BRIntervalMinute...");
	 
 }

 
}
