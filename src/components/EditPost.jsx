import { useState } from "react";
import { Button,Modal } from "react-bootstrap";
function EditPost(props) {
 const [show, setShow] = useState(false);
const [title, setTitle] = useState(props.post.title);
const [text, setText] = useState(props.post.body);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div
        >
            <div className="mx-auto my-5 text-center">
                <Button color="success block" onClick={handleShow}>Edit Post</Button>
            </div>
            
      <Modal show={show} onHide={handleClose} className="p-2">
        <Modal.Header closeButton>
          <Modal.Title  className="mx-auto mb-4">New Post</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          
                    <form className="mx-auto " onSubmit={(e) => {
                        e.preventDefault();
                       props.editPost(title,text,props.post.id)
                     
                        handleClose();

                    }}
                        
            >
               <div className="form-group col-10 mx-auto">
                             <input type="text" className="form-control" value={title}  onChange={(e)=>setTitle(e.target.value)}  />
                        </div>
                       
                        <div className="form-group my-4 col-10 mx-auto">
                             <textarea type="textarea" className="form-control" value={text}  onChange={(e)=>setText(e.target.value)} ></textarea>
                        </div>
                        

                        <div className="form-group mx-auto text-center my-4">
                            <Button className="btn btn-grey" type="submit" >Save</Button>
                          </div>
                    </form>
        </Modal.Body>

        <Modal.Footer class="mx-auto mt-3 p-2">
          <Button variant="secondary">Close</Button>
         
        </Modal.Footer>
      </Modal>
    </div>
    )


}








export default EditPost;