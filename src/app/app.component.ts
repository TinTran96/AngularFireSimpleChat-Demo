/**
 *  AngularFire Chat app Demo
 *
 *  @package  Angular4
 *  @author   Trần Bảo Tín <tbaotin96@gmail.com>
 *  Skype: tbaotin96@gmail.com
 *  
 *  An Angular4 App using AngularFire2 5.0.0 + Angular-Cli 1.2.3 + Bootstrap 3.3.7 + Firebase Cloud Storage Beta
 *  
 *  Hồ Chí Minh City @ 11/2017
 *
 **/

import { Component,AfterViewChecked, ElementRef, ViewChild, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('readscroll') private myScrollContainer: ElementRef;
  private user:any;
  private messagesCol: AngularFirestoreCollection<Message>;
  private messages: any;
  private postDoc: AngularFirestoreDocument<Message>;
  private message: Observable<Message>;
  private content:string="";
  private empty_flg:boolean=false;

  constructor(private afs: AngularFirestore,
              public afAuth: AngularFireAuth) {
                
              }

  ngOnInit() {
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.user = res;
        console.log('user is logged in',res);
      } else {
        console.log('user not logged in',res);
      }
    });
    this.messagesCol = this.afs.collection('messages');
    this.messages = this.messagesCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Message;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
  }
  
  /**
   * Add message data to cloud storage
   * 
   */
  sendMessage() {
    if(this.content != "")
    {
      //The statement below is add without customize key for data, the key will auto generate.
      //this.afs.collection('posts').add({'username': this.user.displayName, 'content': this.content,'avatar':this.user.photoURL});
      var d = new Date();
      //The statement below is add with customize key for data, the key for data is variable d:date
      this.afs.collection('messages').doc(d.toString()).set({'username': this.user.displayName, 'content': this.content,'avatar':this.user.photoURL});
      this.scrollToBottom();
      this.content="";
      this.empty_flg = false;
    }
    else
    {
      this.empty_flg = true;
    }
  }

  /**
   * Get message detail by ID
   * @param messageId 
   */
  getMessage(messageId) {
    this.postDoc = this.afs.doc('messages/'+messageId);
    this.message = this.postDoc.valueChanges();
  }

  /**
   * Delete message by ID
   * @param messageId 
   */
  deleteMessage(messageId) {
    this.afs.doc('messages/'+messageId).delete();
  }
  
  /**
   * Login Google by Auth of Firebase
   * Remember to enable Sign-in method in Authentication
   */
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  /**
   * Logout auth
   */
  logout() {
    this.afAuth.auth.signOut();
  }

  scrollToBottom(): void {
      try {
          this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      } catch(err) { }                 
  }
}

interface Message {
  username: string;
  content: string;
  avatar: string;
}

interface MessageId extends Message { 
  id: string; 
}
