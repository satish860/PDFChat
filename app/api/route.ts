import { NextResponse } from "next/server"
import { getXataClient } from "@/src/xata"

const xata = getXataClient()

export async function POST(request: Request) {
    const res : document = await request.json();
    const record = await xata.db.Docs.create({
        user_id: res.user_id,
        docs_id: res.docs_id,
        file_url: res.file_url,
        index_status: res.index_status,
        file_name: res.file_name,
      });
    return NextResponse.json({ id: record.id });
}
