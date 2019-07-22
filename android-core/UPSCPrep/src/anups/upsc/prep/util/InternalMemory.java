package anups.upsc.prep.util;

import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteException;
import android.support.v7.app.ActionBarActivity;
/* SQLite Database (That stores data in a File in the Device ) */
public class InternalMemory extends ActionBarActivity {
	
	public boolean checkDatabaseExistOrNot(String DB_FULL_PATH) {
		  SQLiteDatabase database = null;
		    try {
		    	database = SQLiteDatabase.openDatabase(DB_FULL_PATH, null, SQLiteDatabase.OPEN_READONLY);
		    } catch (SQLiteException e) {
		        
		    } finally {
		    	database.close();
		    }
	   return database!=null;
	}
	
	public void createDatabase(String DB_FULL_PATH) {
		
	}

}
