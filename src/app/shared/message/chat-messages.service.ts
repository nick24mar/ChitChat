import { DataService } from './../data/data.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from '@angular/core';

@Injectable()
export class ChatMessagesService extends DataService {

  constructor(afAuth: AngularFireAuth, afDb: AngularFireDatabase) {
    super(afAuth, afDb);
  }
}
