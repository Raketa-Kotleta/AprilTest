export default class Game{
  public readonly id: number;
  public readonly title: string;
  public readonly thumbnail: string;
  public readonly short_description: string;
  public readonly game_url: string;
  public readonly genre: string;
  public readonly platform: string;
  public readonly publisher: string;
  public readonly developer: string;
  public readonly release_date: string;
  public readonly freetogame_profile_url: string;

  constructor(
    id: number,
    title: string,
    thumbnail: string,
    short_description: string,
    game_url: string,
    genre: string,
    platform: string,
    publisher: string,
    developer: string,
    release_date: string,
    freetogame_profile_url: string,
  )
  {
    this.id = id;
    this.title = title;
    this.thumbnail = thumbnail;
    this.short_description = short_description;
    this.game_url = game_url;
    this.genre = genre;
    this.platform = platform;
    this.publisher = publisher;
    this.developer = developer;
    this.release_date = release_date
    this.freetogame_profile_url = freetogame_profile_url;
  }


}

