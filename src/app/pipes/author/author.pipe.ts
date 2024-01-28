import { Pipe, PipeTransform } from '@angular/core';
import {IAuthor} from "../../interfaces/IAuthor";

@Pipe({
  name: 'author',
  standalone: true
})
export class AuthorPipe implements PipeTransform {

  transform(author: string, ...args: unknown[]): string {
    const authorData = author.split(' ');

    return authorData.length > 1 ? `${authorData[0][0]}. ${authorData[1]}` : author;
  }

}
