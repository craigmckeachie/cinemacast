export class Movie {
  id: number | undefined;
  title = "";
  year = 0;
  director = "";
  genre = "";
  rating = 0;
  budgetInMillions = 0;

  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.title) this.title = initializer.title;
    if (initializer.year) this.year = initializer.year;
    if (initializer.director) this.director = initializer.director;
    if (initializer.genre) this.genre = initializer.genre;
    if (initializer.rating) this.rating = initializer.rating;
    if (initializer.budgetInMillions) this.budgetInMillions = initializer.budgetInMillions;
  }
}
