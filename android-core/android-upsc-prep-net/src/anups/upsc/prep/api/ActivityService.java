package anups.upsc.prep.api;

import anups.upsc.prep.activities.R;
import anups.upsc.prep.app.AndroidInitializerScreen;
import android.annotation.SuppressLint;
import android.annotation.TargetApi;
import android.app.Notification;
import android.app.NotificationManager;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.support.v7.app.ActionBarActivity;
import android.webkit.JavascriptInterface;
import anups.upsc.prep.util.UserInterfaceAPI;

@TargetApi(Build.VERSION_CODES.JELLY_BEAN)
@SuppressLint("NewApi")
public class ActivityService extends ActionBarActivity {
	Context mContext;
	public ActivityService(Context c) {  mContext = c; }
	
	 @JavascriptInterface
	 public void androidAlert(String message) {
		UserInterfaceAPI dbx = new UserInterfaceAPI();
		dbx.dialogBox(message, "Ok", "Cancel",mContext);
	 }
	 
	 @JavascriptInterface
	    public void pageTransfer(String fromPage, String toPage) {  /* context=<FromClassName>.this */
		  if(toPage.equalsIgnoreCase("AdManager")) {
			  Intent myIntent = new Intent(mContext, AndroidInitializerScreen.class);
			         myIntent.putExtra("FROM_PAGE", fromPage);
			  startActivity(myIntent);
		  }
		 
		 
	 }
	 
	 public void notificationMsgPush(String title, String body, String subject) {
		 /* NOTIFICATION PUSH-MESSAGE */   
		    NotificationManager notif=(NotificationManager)getSystemService(Context.NOTIFICATION_SERVICE);
	        Notification notify=new Notification.Builder
	           (getApplicationContext()).setContentTitle(title).setContentText(body).
	           setContentTitle(subject).setSmallIcon(R.drawable.ic_launcher).build();
	            
	           notify.flags |= Notification.FLAG_AUTO_CANCEL;
	           notif.notify(0, notify);
	 }
	 
	 
	 
}
