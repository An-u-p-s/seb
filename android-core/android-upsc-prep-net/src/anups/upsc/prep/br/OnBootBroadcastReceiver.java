package anups.upsc.prep.br;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import anups.upsc.prep.services.BackgroundService;
import anups.upsc.prep.util.AndroidLogger;

public class OnBootBroadcastReceiver extends BroadcastReceiver {

	org.apache.log4j.Logger logger = AndroidLogger.getLogger(OnBootBroadcastReceiver.class);
	
	@Override
	public void onReceive(Context context, Intent intent) {
		logger.info("onReceive OnBootBroadcastReceiver");
		// Starts Running a Background-Service
		try {
		  context.startService(new Intent(context, BackgroundService.class)); 
		} catch(Exception e){ logger.info("Error: "+e.getMessage()); }
	}

}
