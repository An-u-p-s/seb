package anups.upsc.prep.notify.ws;

import android.app.ActivityManager;
import android.content.Context;
import android.content.Intent;
import android.os.AsyncTask;
import anups.upsc.prep.notify.ws.response.WSRIntervalHour;
import anups.upsc.prep.notify.ws.util.WSUtility;
import anups.upsc.prep.services.BGServiceMinute;
import anups.upsc.prep.services.StartupService;
import anups.upsc.prep.util.AndroidLogger;

public class WSIntervalHour extends AsyncTask<String, String, String>{
  org.apache.log4j.Logger logger = AndroidLogger.getLogger(WSIntervalHour.class);
  private Context context;
  
  public WSIntervalHour(Context context){ this.context=context; }
  
  @Override
  protected String doInBackground(String... params) {
	 WSUtility wsUtility = new WSUtility();
	 return wsUtility.HttpURLGETResponse(params[0]);
  }


  @Override  
  protected void onPostExecute(String response) {
	WSRIntervalHour wsrIntervalHour = new WSRIntervalHour(context,response);
	wsrIntervalHour.funcTrigger_playStoreAppVersion();
  }
 
}
