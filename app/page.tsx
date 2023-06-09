
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { DropZone } from "@/components/drop-zone";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Chat with Any of your Docs <br className="hidden sm:inline" />
          built with Large Language Model.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          DocSearch is a search engine for your docs and knowledge base.
          It&apos;s like Google, but for your docs and knowledge base.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.chat}
          className={buttonVariants({ size: "lg" })}
        >
          Chat
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
      </div>
     <div>
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">Chat with any docs</h1>
      </div>
      <DropZone className="flex h-96 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300" />
     </div>
    </section>
  )
}
