import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category, Message } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http: HttpClient){

  }
  fetch(): Observable<Category[]>{
   return this.http.get<Category[]>('/api/category')
  }
  getById(id:string): Observable<Category>{
    return this.http.get<Category>(`/api/category/${id}`)
  }
  create(name:string, image?:File): Observable<Category>{

    const formData = new FormData()

    if(image){
      formData.append('image',image,image.name)
    }
    formData.append('name',name)

    return this.http.post<Category>('/api/category',formData)
  }
  update(id:string | undefined, name:string, image?:File): Observable<Category>{ ///????undefined

    const formData = new FormData()

    if(image){
      formData.append('image', image, image.name)
    }
    formData.append('name', name)

    return this.http.patch<Category>(`/api/category/${id}`, formData)
  }
  delete(id:string | undefined):Observable<Message>{
    return this.http.delete<Message>(`/api/category/${id}`)
  }
}
