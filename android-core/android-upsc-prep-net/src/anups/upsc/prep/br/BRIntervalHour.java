package anups.upsc.prep.br;

import android.app.ActivityManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Handler;
import android.os.Looper;
import android.widget.Toast;
import anups.upsc.prep.js.AppSessionManagement;
import anups.upsc.prep.notify.ws.WSIntervalHour;
import anups.upsc.prep.notify.ws.util.Notifications;
import anups.upsc.prep.services.BGServiceHour;
import anups.upsc.prep.services.BGServiceMinute;
import anups.upsc.prep.util.AndroidLogger;
import anups.upsc.prep.web.templates.URLGenerator;

public class BRIntervalHour  extends BroadcastReceiver{
 org.apache.log4j.Logger logger = AndroidLogger.getLogger(BRIntervalHour.class);

 
 
 @Override
 public void onReceive(Context context, Intent intent) {
	 logger.info("BRIntervalHour Started...");
    
	  // AlarmOnceTrigger.getInstance(context);
   
   
  
  }
 }
