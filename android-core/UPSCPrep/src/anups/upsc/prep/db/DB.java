package anups.upsc.prep.db;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import anups.upsc.prep.constants.BusinessConstants;
import anups.upsc.prep.db.DB;
import anups.upsc.prep.js.AppSessionManagement;
import anups.upsc.prep.util.AndroidLogger;

public class DB extends SQLiteOpenHelper {
  org.apache.log4j.Logger logger = AndroidLogger.getLogger(SQLiteOpenHelper.class);
  
  public static final String DATABASE_FILE = "Mylocalhook.db";
  
  private static DB sInstance;
  public Context context;
  public static String DATABASE_FILEPATH;
  
  public static synchronized DB getInstance(Context context) {
	if(sInstance == null) {
	 sInstance = new DB(context.getApplicationContext());
    }
    return sInstance;
  }
		
  private DB(Context context) {
   super(context, DATABASE_FILE , null, 1);
   this.context=context;
  }
		
  public SQLiteDatabase connectDatabase(){
	AppSessionManagement appSessionManagement = new AppSessionManagement(context);
	String externalDir = appSessionManagement.getAndroidSession(BusinessConstants.ANDROID_PROJECTPATH);
	DATABASE_FILEPATH=externalDir+"//"+DATABASE_FILE;
	SQLiteDatabase db = SQLiteDatabase.openOrCreateDatabase(DATABASE_FILEPATH, null);
	return db;
  }
		
  @Override
  public void onCreate(SQLiteDatabase db) {
    logger.info("SQLite onCreate is opened..");
    /* onCreate() is only run when the database file did not exist.  */
	 String createSQLSchema = createDBSchema();
	 db.execSQL(createSQLSchema);
  }
		
  @Override
  public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
    /*	onUpgrade() is only called when the database file exists but the stored version number is lower than requested in constructor. */
	 String dropSQLSchema = createDBSchema();
	 db.execSQL(dropSQLSchema);
	 onCreate(db);
  } 

  public String createDBSchema(){
   StringBuilder sql = new StringBuilder();
   return sql.toString();
  }
  
  public String dropDBSchema(){
	StringBuilder sql = new StringBuilder();
	
	return sql.toString();
  }
}
