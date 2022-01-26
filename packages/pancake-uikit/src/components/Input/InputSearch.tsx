/* eslint-disable jsx-a11y/no-autofocus */
import React from "react";
import styled from "styled-components";
import { InputSearchProps } from "./types";

const Input = styled.input<InputSearchProps>`
    background: #fff;
    border: 1px solid #202251;
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    border-radius: 1rem;
    font-size: 15px;
    line-height: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 2.5rem;
    width: 100%;
    overflow: visible;
    min-width: 250px;
    &:focus:not(:disabled) {
        outline: none;
    }
`;

const InputSearch = ({ value,placeholder, ...props }: InputSearchProps): JSX.Element => (
    <div className="px-6" style={{width: '100%'}}>
        <div style={{position:'relative'}}>
            <svg width="20" height="20" fill="currentColor" 
                style={{
                    position: 'absolute', left: '0.75rem', top:'50%',
                    transform: 'translateX(0) translateY(-50%) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1)'
                }} 
            >
                <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
            </svg>
            <Input type="text" value={value} placeholder={placeholder} {...props}/>
        </div>
    </div>
);

export default InputSearch;
