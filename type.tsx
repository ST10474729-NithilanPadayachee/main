//CODE ATTRIBUTION: GeeksforGeeks (no date) TypeScript Tutorial. Available at: https://www.geeksforgeeks.org/search/?gq=TypeScript+Tutorial (Accessed: 11    November 2025). (2)TypeScript (no date) TypeScript for JavaScript Programmers. Available at: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html (Accessed: 13 November 2025).
 //Code Attribution - W3Schools (no date) TypeScript styling. Available at: https://www.w3schools.com/#gsc.tab=0&gsc.q=typescript%20styling (Accessed: 13 November 2025).
 //Node.js (no date) Working with different filesystems. Available at: https://nodejs.org/en/learn/manipulating-files/working-with-different-filesystems (Accessed: 13 November 2025).

export type Course = "Beverage" | "Main Meal" | "Dessert";


export type CafeItem = {

    id: string;

    itemName: string;

    description: string;

    category: Course;

    price: number;

    intensity: "Mild" | "Balanced" | "Strong";

    image: string;

    ingredients: string[];

};


export type RootStackParamList = {

    Welcome: undefined;

    Home: undefined;

    AddItem: undefined;

    Filter: { items: CafeItem[] } | undefined;

};