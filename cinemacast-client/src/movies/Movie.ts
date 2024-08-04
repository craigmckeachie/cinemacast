export class Movie {
  id: string | undefined;
  title = "";
  genre = "";
  year: number | undefined = undefined;
  rating: number | undefined = undefined;
  director = "";
  budgetInMillions: number | undefined = undefined;

  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.title) this.title = initializer.title;
    if (initializer.genre) this.genre = initializer.genre;
    if (initializer.year) this.year = initializer.year;
    if (initializer.rating) this.rating = initializer.rating;
    if (initializer.director) this.director = initializer.director;
    if (initializer.budgetInMillions) this.budgetInMillions = initializer.budgetInMillions;
  }
}
