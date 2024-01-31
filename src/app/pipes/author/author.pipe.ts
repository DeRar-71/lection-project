import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'author',
  standalone: true
})
export class AuthorPipe implements PipeTransform {

  transform(author: string, ...args: unknown[]): string {
    const authorData = author.trim().split(' ');

    return authorData.length > 1 ? `${authorData[0][0]}. ${authorData[1]}` : author;
  }

}
