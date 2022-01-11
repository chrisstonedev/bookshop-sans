import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  error = '';

  getBook(id: number): BookSpecific | undefined {
    const bookArray = this.getArray();
    return bookArray.find(x => x.id === id);
  }

  getArray(): BookSpecific[] {
    return [{
      id: 1,
      title: 'Game of Thrones (A Song of Ice and Fire, Book 1), A',
      author: 'George R.R. Martin',
      year: 2011,
      description: 'The original book that inspired the HBO series.',
      cost: '6.74',
      quantity: 4,
      image: 'game_of_thrones.jpg'
    }, {
      id: 2,
      title: 'Deep Down Dark: The Untold Stories of 33 Men Buried in a Chilean Mine, and the Miracle That Set Them',
      author: 'Héctor Tobar',
      year: 2014,
      description: 'The shocking true story of 33 trapped Chilean miners and their survival.',
      cost: '19.45',
      quantity: 7,
      image: 'deep_down_dark.jpg'
    }, {
      id: 3,
      title: 'Gone Girl',
      author: 'Gillian Flynn',
      year: 2012,
      description: 'The original book that inspired the David Fincher film.',
      cost: '8.43',
      quantity: 8,
      image: 'gone_girl.jpg'
    }, {
      id: 4,
      title: 'What If?: Serious Scientific Answers to Absurd Hypothetical Questions',
      author: 'Randall Munroe',
      year: 2014,
      description: 'The creator of the famous XKCD web comic tackles absurd hypotheticals with a serious and captivating manner.',
      cost: '13.20',
      quantity: 4,
      image: 'what_if.jpg'
    }, {
      id: 5,
      title: 'Attempting Normal',
      author: 'Marc Maron',
      year: 2013,
      description: 'Reflecting on his career and personal life, the stand-up comedian and sitcom star shares his unique views.',
      cost: '12.02',
      quantity: 6,
      image: 'attempting_normal.jpg'
    }];
  }
}

export interface BookSpecific {
  id: number;
  title: string;
  author: string;
  year: number;
  description: string;
  cost: string;
  quantity: number;
  image: string;
}
