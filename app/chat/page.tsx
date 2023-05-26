import SideBar from "./sidebar/sidebar"

export default function ChatPage() {
  return (
    <div className="flex h-full gap-2">
      <SideBar />
      <div className="flex-1">
        <div className="flex h-full flex-col justify-between border border-red-400">
          <div>
            <h1>Chat</h1>
          </div>
          <div>
            <h1>Chat</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
