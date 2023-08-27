// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "BioBath";
export const SITE_DESCRIPTION = "Welcome to my website!";

export type Author = {
  name: string;
  bio?: string;
  avatar: string;
  twitter?: string;
  github?: string;
  twBgColor?: string;
  fontName?: string;
};

export type Authors = { [key: string]: Author };

export const authors: Authors = {
  ntlchs: {
    name: "Natália Chies",
    avatar: "https://avatars.githubusercontent.com/u/46873869?v=4",
    github: "https://github.com/ntlchs",
    twBgColor: "bg-blue-500",
  },
  luism6n: {
    name: "Luis M.",
    bio: "Addicted to imagining how things work",
    avatar: "https://avatars.githubusercontent.com/u/35996614?v=4",
    github: "https://github.com/luism6n",
    twBgColor: "bg-sky-500",
  },
  marceloprates: {
    name: "Marcelo Prates",
    avatar: "https://avatars.githubusercontent.com/u/1848024?v=4",
    github: "https://github.com/marceloprates",
    twBgColor: "bg-orange-500",
  },
  yahgo: {
    name: "Yahgo",
    avatar: "https://avatars.githubusercontent.com/u/68031393?v=4",
    github: "https://github.com/yahgo",
  },
};

export const getAuthor = (authorId: string): Author | undefined => {
  return authors[authorId];
};

export const allAuthors = (): string[] => {
  return Object.keys(authors);
};
