import { UserBookDetails } from './userBookDetails'

export class User {
    UserId: number;
    UserName: string;
    Email: string;
    Fine: number;
    BookList: UserBookDetails[];
}