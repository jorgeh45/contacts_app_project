import {
  Injectable
} from '@angular/core';
import {
  AppHttpService
} from './app-http.service';
import {
  Contact
} from './../models/contact';



@Injectable({
  providedIn: 'root'
})
export class ContactsService {

 
  constructor(private appHttp: AppHttpService) {}

  Create(contact: Contact) {
    return this.appHttp.post("api/contacts", contact);
  }

  GetList() {
    return this.appHttp.get("api/contacts");

  }


  Update(contact: Contact){
    return this.appHttp.put("api/contacts",contact);
  }

  Delete(contact: Contact) {
    return this.appHttp.delete("api/contacts?id="+contact._id);

  }




}
