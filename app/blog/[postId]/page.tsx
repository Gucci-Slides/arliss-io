import getFormattedDate from "@/lib/getFormattedDate"
import { getPostsMeta, getPostByName } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"
import "highlight.js/styles/github-dark.css"

export const revalidate = 86400

type Props = {
	params: {
		postId: string
	}
}

export async function generateStaticParams() {
	const posts = await getPostsMeta()

	if (!posts) return []

	return posts.map((post) => ({
		postId: post.id,
	}))
}

export async function generateMetadata({ params: { postId } }: Props) {
	const post = await getPostByName(`${postId}.mdx`)

	if (!post) {
		return {
			title: "Post Not Found",
		}
	}

	return {
		title: post.meta.title,
	}
}

export default async function Post({ params: { postId } }: Props) {
	const post = await getPostByName(`${postId}.mdx`)

	if (!post) notFound()

	const { meta, content } = post
	const pubDate = getFormattedDate(meta.date)
	const tags = meta.tags.map((tag, i) => (
		<Link key={i} href={`blog/tags/${tag}`}>
			{tag}
		</Link>
	))

	return (
		<div className='mx-auto max-w-2xl py-6 px-4'>
			<h2 className='text-3xl sm:text-4xl font-bold mt-4 mb-2'>
				{meta.title}
			</h2>
			<p className='text-sm'>{pubDate}</p>
			<article className='prose mt-4'>{content}</article>
			<section>
				<h3 className='text-xl font-bold mt-8'>Related:</h3>
				<div className='flex flex-wrap gap-2 mt-2'>{tags}</div>
			</section>
			<p className='mb-10 text-center'>
				<Link href='/blog' className='text-blue-500 hover:underline'>
					← Back to Blog
				</Link>
			</p>
		</div>
	)
}
