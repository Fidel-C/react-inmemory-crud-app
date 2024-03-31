import { Modal,Button } from "react-bootstrap";
import { useState} from 'react';



function AddPost(props) {
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div
        >
            <div className="mx-auto my-5 text-center">
                <Button color="success block" onClick={handleShow}>Add Post</Button>
            </div>
            
      <Modal show={show} onHide={handleClose} className="p-2">
        <Modal.Header closeButton>
          <Modal.Title  className="mx-auto mb-4">New Post</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          
                    <form className="mx-auto " onSubmit={(e) => {
                        e.preventDefault();
                        props.addPost(title,text);
              setText('')
              setTitle('')
              handleClose()


                    }}
                        
            >
              <div className="form-group my-4 col-10 mx-auto">
                             <input placeholder="title" type="text" className="form-control" value={title}  onChange={(e)=>setTitle(e.target.value)}  />
                        </div>
               
                        <div className="form-group col-10 mx-auto">
                            
                       
                <textarea  placeholder="body" className="form-control" value={text}  onChange={(e)=>setText(e.target.value)} ></textarea>
                       
              </div>
                        

                        <div className="form-group mx-auto text-center my-4">
                            <Button className="success" type="submit" >Save</Button>
                          </div>
                    </form>
        </Modal.Body>

        <Modal.Footer class="mx-auto mt-3 p-2">
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
    
}







export default AddPost;