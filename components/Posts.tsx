import { getPostsMeta } from "@/lib/posts"
import ListItem from "./ListItem"

export default async function Posts() {
	const posts = await getPostsMeta()

	if (!posts) {
		return <p className='mt-10 text-center'>Sorry, no posts available.</p>
	}

	return (
		<section className='flex flex-col mx-auto max-w-2xl px-4'>
			<h2 className='text-3xl sm:text-4xl font-bold mb-4'>Blog</h2>
			<ul className='mt-2 space-y-2 sm:space-y-4'>
				{posts.map((post) => (
					<ListItem key={post.id} post={post} />
				))}
			</ul>
		</section>
	)
}
