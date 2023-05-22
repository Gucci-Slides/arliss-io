import Posts from "@/components/Posts"

export const revalidate = 86400

export default function Blog() {
	return (
		<div>
			{/* @ts-expect-error Server Component */}
			<Posts />
		</div>
	)
}
