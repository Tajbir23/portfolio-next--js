import Image from "next/image";
import Link from "next/link";

const repo = async () => {
    try {
        const result = await fetch(`https://portfolio-tajbir.vercel.app/github-pinned-repo`);
        if (!result.ok) {
            throw new Error(`HTTP error! Status: ${result.status}`);
        }
        const data = await result.json();
        return data.user.pinnedItems.edges;
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return an empty array or handle the error as needed
    }
};

const Pinned = async () => {
    const repoData = await repo();
    
    return (
        <div className="mx-10 mb-20" id="pinned-repo">
            <h1 className="text-4xl font-bold text-white text-center mb-10">Pinned Repositories</h1>
            <div className="bg-gray-900 rounded-lg p-10 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {repoData.length > 0 ? repoData.map((repo) => (
                        <Link href={repo.node.url} key={repo.node.id} className="border-2 border-white flex justify-center gap-5 rounded-lg shadow-md p-5 hover:border-blue-500">
                            <Image
                                src={repo.node.openGraphImageUrl || '/default-image.jpg'}
                                width={200}
                                height={200}
                                className="w-1/4"
                                alt={repo.node.name}
                            />
                            <div>
                                <h1 className="font-bold">{repo.node.name}</h1>
                                <div className="text-sm">
                                    <p>Create at: {new Date(repo.node.createdAt).toLocaleString().split(',')[0]}</p>
                                </div>
                            </div>
                        </Link>
                    )) : (
                        <p className="text-center">No pinned repositories found.</p>
                    )}
                </div>
                {/* <p>Last updated: {new Date(repoData[0].updatedAt).toLocaleString()}</p> */}
            </div>
        </div>
    );
};

export default Pinned;
