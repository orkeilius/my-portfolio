export default function Hero() {
    return (
        <div className="w-[700px] max-w-[33%] h-fit p-6 bg-gray-900 rounded-[3em] shadow-[-15px_15px_100px_5px_rgba(188,0,191,0.15)]">
            <div className="flex ">

                <div className="rounded-full aspect-square w-32 h-32 bg-slate-700 "></div>
                <div className="w-full">
                    <h1 className="text-4xl ml-4">Matthieu <br />De oliveira</h1>
                    <p className="ml-4 font-light text-lg text-indigo-500 hover:text-emerald-500 transition-all duration-700">Étudiant en bts sio</p>
                </div>
            </div>
            <div className="text-justify my-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore incidunt deserunt voluptas, illum, blanditiis sit quis aut quasi aliquam iusto eum debitis, fugiat voluptatem veniam. Totam mollitia aliquid repellendus fugiat.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis odio ex quaerat sunt porro voluptatibus omnis possimus tenetur laboriosam provident eos obcaecati dolor, veniam cumque! Ullam laboriosam culpa voluptatem molestiae!
            </div>
        </div>
    )
}