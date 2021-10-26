import React, { useState } from 'react'
import { Row, Col, ListGroup, Modal, Form, Button, Card } from 'react-bootstrap'
import SearchBox from './SearchBox';
import { useHistory } from 'react-router-dom'

function SearchModal() {
    const [lgShow, setLgShow] = useState(false);
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        setLgShow(false)
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
            console.log("searched");
            setKeyword('')
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
  
    return (
      <>
        <div onClick={() => setLgShow(true)} style={{cursor:"pointer"}} ><i class="fas fa-search"></i></div>
        
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Search
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form inline>
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5'
                style={{width:"80%"}}
                placeholder="You can search here.."
            ></Form.Control>

            <Button
                type='submit'
                variant='btn btn-secorndary btn-sm'
                className='p-2'
                // style={{textDecoration:"none"}}
                onClick={submitHandler}
            >
                Search
            </Button>
        </Form>
          </Modal.Body>
          {/* <Modal.Footer>

          </Modal.Footer> */}
        </Modal>
      </>
    );
  }
  
export default SearchModal