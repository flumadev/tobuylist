export type TagProps = {
  name: string
}
export default function Tag(props: TagProps) {
  return (
    <div className="py-[6px] px-[10px] bg-slate-900 text-slate-50 text-xs rounded dark:bg-slate-300">
      <span className="text-[12px] font-bold m-0 dark:text-slate-900">
        {props.name}
      </span>
    </div>
  )
}
