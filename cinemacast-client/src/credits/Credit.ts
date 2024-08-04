import { Actor } from "../actor/Actor";

export class Credit {
  id: number | undefined;
  movieId: number | undefined;
  actorId: number | undefined;
  role = "";
  actor: Actor | undefined;

  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.id) this.movieId = initializer.movieId;
    if (initializer.id) this.actorId = initializer.actorId;
    if (initializer.title) this.role = initializer.role;
    if (initializer.title) this.actor = initializer.actor;
  }
}
