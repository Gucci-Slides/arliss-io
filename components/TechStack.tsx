import Link from "next/link"
import { SiTailwindcss, SiVercel, SiTypescript } from "react-icons/si"
import { FaAws, FaPython, FaReact } from "react-icons/fa"

const data = {
	languages: [
		{ path: "typescript", href: "typescriptlang.org" },
		{ path: "python", href: "python.org" },
	],
	libraries: [
		{ path: "react", href: "reactjs.org" },
		{ path: "tailwindcss", href: "tailwindcss.com" },
	],
	tools: [
		{ path: "aws", href: "aws.amazon.com" },
		{ path: "vercel", href: "vercel.com" },
	],
}

export default function TechStack() {
	return (
		<div>
			{Object.entries(data).map(([name, items]) => (
				<div key={name}>
					<span className='uppercase text-xl'>{name}</span>
					<ul className='flex justify-start mx-auto'>
						{items.map((item) => (
							<Link key={item.path} href={`https://${item.href}`}>
								<li className='flex text-black mt-4 mb-4 mr-4 text-3xl'>
									{item.path === "typescript" && (
										<SiTypescript />
									)}

									{item.path === "python" && <FaPython />}
									{item.path === "react" && <FaReact />}
									{item.path === "tailwindcss" && (
										<SiTailwindcss />
									)}
									{item.path === "aws" && <FaAws />}
									{item.path === "vercel" && <SiVercel />}
								</li>
							</Link>
						))}
					</ul>
				</div>
			))}
		</div>
	)
}
