import BottomNav from "../components/shared/BottomNav";


export default function Home() {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* Left Div. */}
      <div className="flex-[3] bg-red-500">

      </div>
      {/* right Div. */}
      <div className="flex-[2] bg-blue-500">

      </div>
      <BottomNav />
    </section>
  )
}
