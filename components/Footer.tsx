export default function Footer() {
	return (
		<footer className=' text-black py-4 mt-auto'>
			<div className='container mx-auto text-center'>
				<p className='text-sm'>
					&copy; {new Date().getFullYear()} All rights reserved.
				</p>
			</div>
		</footer>
	)
}
