import React,{useState,useEffect,useContext} from "react";

import firebase  from "firebase/app";

import { Container,Form,FormGroup,Label,Input,Button,Spinner,Row,Col } from "reactstrap"
import {ContactContext} from "../context/Context";
import {toast} from "react-toastify";

const AddContact = () => {

    const { state,dispatch } = useContext(ContactContext)

    const [downloadUrl,setDownloadUrl] = useState(null);
    const [isUploading,setIsUploading] = useState(false);


    // function to upload image to firsestore

    const imagePicker = async e =>{
        try {
            const file = e.target.files[0];

            let metadata = {
                contentType : file.type
            }

            // create storage reference
            const storageRef = await firebase.storage().ref();

            // Upload the file and metadata

            var uploadTask = storageRef.child("images/"+file.name).put(file,metadata);

            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,snapshot=>{
                   setIsUploading(true);
                  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log('progress=',progress);

                   switch (snapshot.state){
                       case firebase.storage.TaskState.PAUSED:
                           setIsUploading(false);
                           console.log("uploading is paused");
                           break;
                       case firebase.storage.TaskState.RUNNING:
                           console.log("uploading in process");
                           break
                   }

                   if(progress === 100){
                       setIsUploading(false);
                       toast("uploaded successfully",{ type : "success" })
                   }


            },error=>{
                toast("Something went wrong in state change",{ type :  "error" });
            },()=>{
                uploadTask.snapshot.ref.getDownloadURL().then(url=>{
                    setDownloadUrl(url);
                }).catch(err=>{
                    console.log(err);
                })
            })



        }catch (e) {
            console.log(e);
            toast("Something went wrong",{ type : "error" })
        }
    }

    return(
        <Container fluid className="mt-5">
            <Row>
                <Col md={6} className="offset-md-3 p-2">
                    <Form>

                        <div className="text-center">
                            <div>

                                { isUploading ? (
                                    <Spinner type="grow" color="primary" />
                                ) : (
                                    <div>
                                    <label htmlFor="imagepicker">
                                        <img src={downloadUrl} className="profile"/>
                                    </label>
                                    <input type="file" name="image" id="imagepicker" accept="image/*" multiple={false} onChange={e => imagePicker(e)} className="hidden" />
                                    </div>
                                ) }

                            </div>
                        </div>

                        <FormGroup>
                            <Input type="text" name="name" id="name" placeholder="Enter your name" />
                        </FormGroup>

                        <FormGroup>
                            <Input type="email" name="email" id="email" placeholder="Enter your email" />
                        </FormGroup>

                        <FormGroup>
                            <Input type="number" name="number" id="number" placeholder="Enter your number" />
                        </FormGroup>

                        <FormGroup>
                            <Input type="textarea" name="area" id="area" placeholder="Enter your address" />
                        </FormGroup>

                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />
                                <span className="text-right">Mark as Star</span>
                            </Label>
                        </FormGroup>


                        <Button type="submit" color="primary" block className="text-uppercase">
                            ADD contact
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddContact;
