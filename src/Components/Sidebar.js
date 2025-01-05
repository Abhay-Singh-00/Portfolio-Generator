import React from 'react';
import { ListGroup, Form, ListGroupItem } from 'react-bootstrap';

const Sidebar=({onTemplateChange,onColorChange,onBackgroundColorChange})=>
{
    return ( 
    <div className="p-3 bg-light" style={{height:'100vh', width:'250px'}}>
        <h5>Customize portfolio</h5>
        <ListGroup>
            <ListGroup.Item>
                <Form.Label>Select Template</Form.Label>
                <Form.Select onChange={(e)=>onTemplateChange(e.target.value)}>
                    <option value="template1">Template 1</option>
                    <option value="template2">Template 2</option> 
                </Form.Select>
            </ListGroup.Item> 
            <ListGroup.Item>
                <Form.Label>Select Text Colour</Form.Label>
                <Form.Control type="color" onChange={(e)=>onColorChange(e.target.value)}/>
            </ListGroup.Item>
            <ListGroup.Item>
                <Form.Label>Select Backgound Colour</Form.Label>
                <Form.Control type="color" onChange={(e)=>onBackgroundColorChange(e.target.value)}/>
            </ListGroup.Item>
        </ListGroup>
        </div>          
    );
};
export default Sidebar;