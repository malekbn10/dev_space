export interface Post {
    id: string;
    userId: string;
    content: string;
    likes: number;
    comments: number;
    createdAt: string;
    updatedAt: string;
    images?: string[]; // Add support for multiple images
  }