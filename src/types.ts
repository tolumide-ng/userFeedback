export enum Rating {
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
}

export interface Comment {
    author: string;
    email: string;
    rating: Rating;
    comment: string;
}
