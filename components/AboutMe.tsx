import TechStack from "./TechStack"

/* export default function AboutMe() {
	return (
		<main className=' prose prose-xl flex flex-col mx-auto px-6 pb-8 sm:flex-row'>
			<section className='flex-1'>
				<div className='flex flex-col'>
					<h1 className='font-black text-5xl'>
						I&apos;m just a
						<br />
						<span className='text-gray-500'>Software Engineer</span>
						<br />
						trying to suck less.
					</h1>
				</div>
				<div className='flex flex-col border border-black mt-8 p-6 rounded-2xl text-base gap-6'>
					<section className='flex-1 font-light leading-6 text-lg'>
						<h2 className='mb-4 text-3xl'>About Me</h2>
						<p>I build web apps.</p>
					</section>
					<TechStack />
				</div>
			</section>
		</main>
	)
} */

export default function AboutMe() {
	return (
		<main className='flex justify-center mx-4 my-4'>
			<section className='max-w-lg mx-auto'>
				<h1 className='font-black text-4xl sm:text-5xl text-center tracking-wide'>
					I&apos;m just a
					<br />
					<span className='text-emerald-800'>Software Engineer.</span>
					<br />
					<p className='mt-1'>I fail. I learn. I grow.</p>
				</h1>
				<div className='border border-black mt-8 p-6 rounded-2xl text-base gap-6'>
					<div className='leading-6 text-lg mb-4'>
						<h2 className='mb-2 text-2xl sm:text-3xl'>About Me</h2>
						<p className='font-light'>
							My name is Arliss. I build web apps.
						</p>
					</div>
					<TechStack />
				</div>
			</section>
		</main>
	)
}
