"use client"

import { useParams } from "next/navigation"

export default function ChatPage() {
  const params = useParams()
  const uid = params.uid
  return <h1>{uid}</h1>
}
