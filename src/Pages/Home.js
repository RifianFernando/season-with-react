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

    // const SubmitForm = (e) => {
    //     e.preventDefault();
    //     const inputValue = e.target.elements.inputField.value;
    //     console.log('Input value:', inputValue);
    //     console.log('submit');
    // }

    const [selectedOption, setSelectedOption] = useState('');

    const handleInputChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const [text, setText] = useState("radio");

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
            <Radio></Radio>


            <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
            <br />
            <Radio.Group options={optionsWithDisabled} onChange={onChange2} value={value2} />
            <br />
            <br />
            <Radio.Group options={options} onChange={onChange3} value={value3} optionType="button" />
            <br />
            <br />
            <Radio.Group
                options={optionsWithDisabled}
                onChange={onChange4}
                value={value4}
                optionType="button"
                buttonStyle="solid"
            />
            {/* <Radio optionType="button">Something 2</Radio> */}

            {/* <Radio>
                Test asdfas
            </Radio> */}


            {/* <form onSubmit={SubmitForm}>
                <input type='text' />
                <Input.Radio
                    value='test'
                >
                    Test asdfas
                </Input.Radio>

                <input type='radio' value={'1'} />

                <Button type="submit">
                    Submit
                </Button>
            </form> */}

            <form onSubmit={handleSubmit}>
                <input type="text" name="inputField" />
                <Input.Radio name="radioGroup" value={'2'}>
                    Test asdfas
                </Input.Radio>


                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Home
