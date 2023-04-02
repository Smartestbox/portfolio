import React from 'react';
import style from './Contacts.module.css'
import styleContainer from './../common/styles/Container.module.css'



const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>Contacts</h2>
                <form action="" className={style.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea rows={10} placeholder={'Some text'}/>
                </form>
                <button>Send</button>
            </div>
        </div>
    );
};

export default Contacts;