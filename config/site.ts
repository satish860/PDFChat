export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Docsearch",
  description:
    `Chat with Any of your Docs and Knowledge Base. DocSearch is a search engine for your docs and knowledge base. 
    It's like Google, but for your docs and knowledge base.`,
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
    chat: "/chat",
  },
}
