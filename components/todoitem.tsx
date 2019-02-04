import * as React from 'react';
import ES from './emptySpaces';

const TodoItem = (props) => {
const {text, done, id} = props;

    return (
        <tbody>
            <tr>
                <td style={{paddingRight:"1rem"}}>{id}</td>
                <td style={{paddingRight:"10rem"}}>{text}</td>
                <td style={{paddingRight:"1rem"}}>{done ? 'Done': 'Due'}</td>
                <td><button>{done ? 'Delete' : 'Done' }</button></td>
            </tr>
            </tbody>
            )
};

export default TodoItem;