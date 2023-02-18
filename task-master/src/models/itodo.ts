export interface ITodo {
    id: number;
    title: string;
    due: Date | null;
    description: string;
    category: string;
    done: boolean;
}