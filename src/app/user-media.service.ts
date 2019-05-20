import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserMediaService {
  getUserMedia(constraints: MediaStreamConstraints): Observable<MediaStream> {
    return Observable.create(observer => {
      navigator.mediaDevices.getUserMedia(constraints)
        .then((stream: MediaStream) => {
          observer.next(stream);
        })
        .catch((error: MediaStreamError) => {
          observer.error(error);
        });
    });
  }
}
