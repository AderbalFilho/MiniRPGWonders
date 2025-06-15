export default function Tag({ tagName }: { tagName: string }) {
  return (
    <span className="rounded-lg bg-yellow-200 shadow-sm shadow-neutral-200/80 text-sm text-neutral-950 px-2 py-1">
      {tagName}
    </span>
  )
}
