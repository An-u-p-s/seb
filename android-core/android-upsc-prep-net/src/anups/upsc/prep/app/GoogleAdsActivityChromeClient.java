package anups.upsc.prep.app;

import android.webkit.WebChromeClient;

public class GoogleAdsActivityChromeClient extends WebChromeClient {

 GoogleAdsActivityScreen webscreenObject;
 public GoogleAdsActivityChromeClient(GoogleAdsActivityScreen webscreenObject){
	this.webscreenObject=webscreenObject;
 }
 
}