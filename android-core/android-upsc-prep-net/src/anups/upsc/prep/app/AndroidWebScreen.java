package anups.upsc.prep.app;


import anups.upsc.prep.activities.R;
import anups.upsc.prep.ads.AdmobInterstitial;
import android.annotation.SuppressLint;
import android.content.Context;
import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.view.Window;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class AndroidWebScreen  extends ActionBarActivity{

	WebView webview;
	 
	@SuppressLint("JavascriptInterface")
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		
		/* NO_DEFAULT_TITLE_AND_FULL_SCREEN_SETTINGS */
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		setContentView(R.layout.activity_dashboard);
		
		
		
		AdmobInterstitial.loadInterstitial(this);
		
	
		/* WEB_VIEW */
		initWebUI();
		InitWebInterface init=new InitWebInterface(this);
		webview.addJavascriptInterface(init, "cursorToAndroid");			
		webview.loadUrl("file:///android_asset/www_v1.0/dashboard.html");
		
	
	}

	@SuppressLint("JavascriptInterface")
	public void initWebUI() {
		webview=(WebView) findViewById(R.id.webview);
		WebSettings websettings=webview.getSettings();
					websettings.setJavaScriptEnabled(true); /* Enable JS */
		webview.setScrollContainer(false);
		webview.setWebViewClient(new WebViewClient());			
		webview.setWebChromeClient(new WebChromeClient());	
		
	}
	
	public class InitWebInterface {
		Context mContext;
		public InitWebInterface(Context c) {  mContext = c; }
		
		
		
			
	}
	
}
