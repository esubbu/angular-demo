import { album } from './album.model';

export interface musicDetails {

  id: number;
  name: String;
  cover: String;
  bio: String;
  albums: album[];
  genre: String;
}
