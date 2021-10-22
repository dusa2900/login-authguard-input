import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransService {

  constructor(private _http:HttpClient) { }

  getT()
  {
   return this._http.get("  http://localhost:4000/trans-T")
  }
  getF()
  {
   return this._http.get("   http://localhost:4000/trans-f")
  }
  getS()
  {
   return this._http.get("   http://localhost:4000/trans-s")
  }
}
