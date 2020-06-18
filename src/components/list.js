import React from 'react';



const List = props => {
    return (
        <ul>
        {
            props.items.map((item,index) => 
            <div className='list-items'>
                 <li key = {index}>
                    {item}
                </li>
                <i className="fa fa-times-circle"></i>
            </div>
           
            )}
    </ul>
    )
    
}

export default List;