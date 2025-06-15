import Image from "next/image";

import { ICard } from "@/interfaces/ICard";
import Tag from "@/components/Tag/Tag";

export default function Card({ card }: { card: ICard }) {

  return (
    <div className="rounded-lg w-[300px] bg-gray-700 shadow-lg shadow-neutral-200/20">
      <h4 className="p-4 w-full border-b-1 border-gray-900 truncate text-xl text-center" title={card.creator}>{card.creator}</h4>
      <div className="w-full">
        <Image
          src={card.imgSrc}
          alt={card.imgAlt || `${card.creator} model`}
          width={300}
          height={300}
          loading="lazy"
        />
      </div>
      <div className="flex gap-2 w-full border-t-1 border-gray-900 p-4">
        {card.tags.map(tag => <Tag key={tag} tagName={tag} />)}
      </div>
    </div>
  )
}
