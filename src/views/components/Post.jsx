import "./post.css"

const Post = () => {

    const posts = [
        {
            id: 1,
            postname: "Dependência Emocional",
            img: "./post/1.jpg",
            link: "https://www.instagram.com/p/DARoggEucAx/?img_index=1"
        },
        {
            id: 2,
            postname: "Pensamento acelerado e ansiedade",
            img: "./post/2.jpg",
            link: "https://www.instagram.com/p/DCccaYVhWb5/?img_index=1"
        },
        {
            id: 3,
            postname: "Relacionamento abusivo",
            img: "./post/3.jpg",
            link: "https://www.instagram.com/p/DBR_dpTTXjS/?img_index=1"
        },
        {
            id: 4,
            postname: "Síndrome de Burnout",
            img: "./post/4.jpg",
            link: "https://www.instagram.com/p/C9foClGO0kG/?img_index=1"
        },
        

    ]

    return(
        <section className="blog-container">
            <h1 className="blog-h1 fon">
                Novidades
            </h1>
            <a href="https://www.instagram.com/projetoreligare.psi/" target="_blank" rel="noopener noreferrer">@projetoreligare.psi</a>
            <div className="post-container">
            {posts.map((post) => (
                <div className="post-div">
                    <figure className="post-figure">
                        <a href={post.link} target="_blank" rel="noopener noreferrer">
                            <img src={post.img} alt={post.postname} />
                        <aside className="post-aside">
                            <h3 className="post-title">{post.postname}</h3>
                            <p>Ver mais</p>
                        </aside>
                        </a>
                    </figure>
                    
                </div>
          ))}
          </div>
          
        </section>
    )
};

export default Post;