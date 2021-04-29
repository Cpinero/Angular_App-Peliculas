import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  
  private apikey:string = "186451da64377780aab2f985f3ca6026";
  private urlMoviedb:string = "https://api.themoviedb.org/3";
  

  constructor(private http:HttpClient) { }

  getPopulares(){
    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
        return this.http.jsonp(url, 'callback=JSONP_CALLBACK');
  }

  getPopularesNinos(){
    const url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
        return this.http.jsonp(url, 'callback=JSONP_CALLBACK');
  }
  
  getCartelera(){
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDate()}`;

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${ this.apikey }&language=es`;
        return this.http.jsonp(url, 'callback=JSONP_CALLBACK');
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.jsonp(url, 'callback=JSONP_CALLBACK');
  }

  getPelicula(id:string){
    const url = `${ this.urlMoviedb }/movie/${id}?api_key=${ this.apikey }&language=es`;
        return this.http.jsonp(url, 'callback=JSONP_CALLBACK');
  }

}
