package anups.upsc.prep.api;

import android.content.ContentResolver;
import android.content.Context;
import anups.upsc.prep.util.ContactsAPI;

public class ContentProviderService {
	Context mContext;
	public ContentProviderService(Context c) {  mContext = c; }

	/* List of Contacts */
	public String listOfContents(ContentResolver contentResolver){
		ContactsAPI cont=new ContactsAPI();
	 return cont.fetchContacts(contentResolver);
	}


}
