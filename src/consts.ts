// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "BioBath";
export const SITE_DESCRIPTION = "Welcome to my website!";


export type Author = {
    name: string;
    bio: string;
    avatar: string;
    twitter: string;
    github: string;
    twBgColor?: string;
    fontName?: string;
};

export type Authors = { [key: string]: Author };

export const authors: Authors = {
    ntlchs: {
        name: "Natália Chies",
        bio: "I'm a full stack dev and I like to write about code.",
        avatar: "/images/nat.jpg",
        twitter: "james",
        github: "https://github.com/ntlchs",
        twBgColor: "bg-blue-500",
    },
    luism6n: {
        name: "Luis M.",
        bio: "I'm a full stack dev and I like to write about code.",
        avatar: "/images/luis.jpg",
        twitter: "james",
        github: "https://github.com/luism6n",
    },
    marceloprates: {
        name: "Marcelo Prates",
        bio: "I'm a full stack dev and I like to write about code.",
        avatar: "/images/marcelo.jpg",
        twitter: "james",
        github: "https://github.com/marceloprates",
        twBgColor: 'bg-orange-500'
    },
    yahgo: {
        name: "Yahgo",
        bio: "I'm a full stack dev and I like to write about code.",
        avatar: "/images/yahgo.jpg",
        twitter: "james",
        github: "https://github.com/yahgo",
    },
}

export const getAuthor = (authorId: string): Author | undefined => {
  return authors[authorId];
};