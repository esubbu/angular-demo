import { Pipe, PipeTransform } from '@angular/core';

import { MoviesData } from './movies.model';

@Pipe({

  name: "SearchFilter"

})


export class SearchFilter implements PipeTransform{

  transform(value: MoviesData[], selectedValue: string): MoviesData[]{
   
    selectedValue = selectedValue ? selectedValue.toLowerCase() : null;

    return selectedValue ? value.filter((movie: MoviesData) => movie.name.toLowerCase().indexOf(selectedValue) !== -1) : value;


  }

}
