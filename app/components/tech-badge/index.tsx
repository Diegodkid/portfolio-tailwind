type TecBadgeProps = {
  name: string
}

export const TecBadge = ({ name }: TecBadgeProps) => {
  return (
    <span className="text-cyan-200 bg-gradient-to-b from-[#37cbc1] to-[#0093fd] text-sm py-1 px-3 rounded-lg">
      {name}
    </span>
  )
}