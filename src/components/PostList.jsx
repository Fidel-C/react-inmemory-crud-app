import EditPost from "./EditPost";


function PostList(props) {
    
    
    return (
        <div className='m-auto p-4' style={{maxHeight:'40vh',overflow:'scroll'}}>
         
            <div className="mx-auto col-md-6 col-8" >
                <ul className="list-group d-flex flex-row flex-wrap">
                    {
                        props.posts.map((item) => <li className="list-group-item m-4 col-3 ">
                             <div className=" text-center">
                                 <strong>{item.title} </strong>
                           </div>

                            <div className="text-center text-italic">
                                 {item.body} 
                           </div>

                            <EditPost post={item} editPost={props.editPost} key={item.id} />
                        </li>)
                        
                   }
                    
            </ul>

            </div>
        
        </div>
     
 )

}





export default PostList;