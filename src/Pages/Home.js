import React, { useState } from 'react';
import { Radio } from 'antd';
import { Input } from 'technotic';

const plainOptions = [
    'Apple',
    'Pear',
    'Orange'
];

const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];

const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
];

function Home() {
    const [value1, setValue1] = useState('Apple');
    const [value2, setValue2] = useState('Apple');
    const [value3, setValue3] = useState('Apple');
    const [value4, setValue4] = useState('Apple');

    const onChange1 = ({ target: { value } }) => {
        setValue1(value);
        console.log('radio1 checked', value);
    };

    const onChange2 = ({ target: { value } }) => {
        console.log('radio2 checked', value);
        setValue2(value);
    };

    const onChange3 = ({ target: { value } }) => {
        console.log('radio3 checked', value);
        setValue3(value);
    };

    const onChange4 = ({ target: { value } }) => {
        console.log('radio4 checked', value);
        setValue4(value);
    };

    const [selectedOption, setSelectedOption] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = e.target.elements.inputField.value;
        const selectedOption = document.querySelector('input[name="radioGroup"]:checked').value;
        console.log('Text Input Value:', inputValue);
        console.log('Selected Radio Button Value:', selectedOption);
        console.log('Submit');
    };

    return (
        <div>


            {/* <Radio.Group options={plainOptions} onChange={onChange1} value={value1} /> */}
            <br />
            <form onSubmit={handleSubmit}>
                <input type="text" name="inputField" />
                {/* <Input.Radio name="radioGroup" value={'3'}>Test asdfas</Input.Radio> */}
                <Input.RadioList name="radioGroup" options={options} />
                <Input.Radio name="radioGroup1" value={'3'}>Test asdfas</Input.Radio>


                <button type="submit">Submit</button>
            </form>

            <br />
        </div>
    )
}

export default Home
