export type TagProps = {
  name: string
}
export default function Tag(props: TagProps) {
  return (
    <div className="flex items-center rounded bg-slate-900 py-[6px] px-[10px] text-xs text-slate-50 dark:bg-slate-300">
      <span className="m-0 text-[12px] font-bold dark:text-slate-900">
        {props.name}
      </span>
    </div>
  )
}
