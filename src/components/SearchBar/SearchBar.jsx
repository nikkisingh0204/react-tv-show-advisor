import s from './style.module.css';
import { useState } from 'react';
import {Search as SearchIcon} from 'react-bootstrap-icons';



export const SearchBar = ({onSubmit}) =>{
    const[inputText, setInputText]=useState('');
    const handleChange = (e) => {
        setInputText(e.target.value);
    }
    const submit = (e) =>{
        const {value}=e.target
        if(e.keyCode === 13 && value.trim() !== ''){
        console.log('entered in if block');
        onSubmit(value)
        setInputText('')
    }
    }
    return (<>
            <SearchIcon className={s.icon} size={23}/>
            <input
                onChange={handleChange}
                onKeyUp={submit}
                type='text' 
                className={s.input} 
                placeholder={'Search a show you want to see'} 
                value={inputText}
            />

    </>
    );
}