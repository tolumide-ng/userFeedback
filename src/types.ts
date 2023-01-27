export interface Feedback {
    author: string;
    email: string;
    rating: number;
    comment: string;
}

export interface BasicAtomicClass {
    wrapperClass?: string;
    subjectClass?: string;
    errorClass?: string;
}
