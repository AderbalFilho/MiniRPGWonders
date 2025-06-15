import Card from "@/components/Card/Card";
import { creators } from "@/constants/models/all";

export default function Home() {
  return (
    <main className="bg-gray-900 text-neutral-200 min-h-screen p-8 pb-20 sm:p-12 lg:p-20 font-inter">
      <h1 className="font-ar-julian text-4xl pb-8">Creators</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-center gap-12">
        {creators.map(creator => <Card key={`creator-${creator.id}`} card={creator} />)}
      </div>
    </main>
  );
}
