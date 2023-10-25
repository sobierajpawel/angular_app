import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightsearched'
})
export class HighlightSearchedPhrasePipe implements PipeTransform {

  transform(value : string, searchedPhrase : string): any {
    if (!searchedPhrase) return value;

    const regex = new RegExp(searchedPhrase, "gi");

    console.log(regex);
    return value.replace(regex, (match)=>`<span class="highlight">${match}</span>`);
  }

}
