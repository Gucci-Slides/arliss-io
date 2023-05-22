export default function Navbar() {
	return (
		<nav className='top-0 p-4 relative z-10'>
			<div className='mx-auto flex justify-center space-x-4'>
				{[
					["Home", "/"],
					["Blog", "/blog"],
					["Github", "https://github.com/Gucci-Slides"],
				].map(([title, url]) => (
					<a
						href={url}
						key={url}
						className='rounded-lg px-3 py-2 text-black font-semibold hover:bg-slate-100 hover:text-slate-900 no-underline'
					>
						{title}
					</a>
				))}
			</div>
		</nav>
	)
}
