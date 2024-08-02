export class Movie {
  id: number | undefined;
  title = "";
  genre = "";
  year = 0;
  rating = 0;
  director = "";
  budgetInMillions = 0;

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
