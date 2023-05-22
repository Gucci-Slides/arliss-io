import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
	post: Meta
}

export default function ListItem({ post }: Props) {
	const { id, title, date } = post
	const formattedDate = getFormattedDate(date)

	return (
		<li className=''>
			<Link className='' href={`/blog/${id}`}>
				{title}
			</Link>
			<br />
			<p className='text-sm mt-1'>{formattedDate}</p>
		</li>
	)
}
