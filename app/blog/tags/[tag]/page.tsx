import { getPostsMeta } from "@/lib/posts"
import ListItem from "@/components/ListItem"
import Link from "next/link"

export const revalidate = 86400

type Props = {
	params: {
		tag: string
	}
}

export async function generateStaticParams() {
	const posts = await getPostsMeta()

	if (!posts) return []

	const tags = new Set(posts.map((post) => post.tags).flat())

	return Array.from(tags).map((tag) => ({ tag }))
}

export function generateMetadata({ params: { tag } }: Props) {
	return {
		title: `Posts about ${tag}`,
	}
}

export default async function TagPostList({ params: { tag } }: Props) {
	const posts = await getPostsMeta()

	if (!posts)
		return <p className='mt-10 text-center'>Sorry, no posts available.</p>

	const tagPosts = posts.filter((post) => post.tags.includes(tag))

	if (!tagPosts.length) {
		return (
			<div className='text-center'>
				<p className='mt-10'>Sorry, no posts for that keyword.</p>
				<Link href='/'>
					<a className='text-blue-500 hover:underline'>
						← Back to Home
					</a>
				</Link>
			</div>
		)
	}

	return (
		<div className='px-4'>
			<h2 className='text-2xl sm:text-4xl font-bold mt-4 mb-2 text-center'>
				Results for: #{tag}
			</h2>
			<section className='mt-6 max-w-md mx-auto'>
				<ul className='mt-2 space-y-2 sm:space-y-4'>
					{tagPosts.map((post) => (
						<ListItem key={post.id} post={post} />
					))}
				</ul>
			</section>
			<p className='my-6 text-center'>
				<Link href='/blog' className='text-blue-500 hover:underline'>
					← Back to Blog
				</Link>
			</p>
		</div>
	)
}
