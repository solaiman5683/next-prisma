const getPost = async () : Promise<any> => {
	const res = await fetch('http://localhost:3000/api/getPosts');
	const post = await res.json();
	return post;
};

export default async function Home() {
  const posts: { id: number, title: string }[] = await getPost();
  console.log(posts);

	return (
		<main className='p-24'>
			<h2 className='text-3xl uppercase font-bold font-mono'>
				Test Application<span className='text-orange-500'>.</span>
			</h2>
			<ul>
				{posts.map(post => (
					<li key={post.id}>
						<h3>{post.title}</h3>
					</li>
				))}
			</ul>
		</main>
	);
}
