import React from 'react'
import './FooterList.css'

const FooterList = (props) => {
    var items = props.children;
    var listItems =[];
    for (let i=0; i<items.length; i++){
        let item = props.children[i];
        listItems.push(<li key={i}>{item}</li>);
    }
    return (
        <ul className='footer-link-list'>
            {listItems}
        </ul>
    )
}

export default FooterList