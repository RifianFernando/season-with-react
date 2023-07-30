import React, { useState } from 'react';
import { Radio } from 'antd';
import { Input } from 'technotic';

const options = [
    { label: 'Apple', value: 'test' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];

function Home() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedOption = document.querySelector('input[name="radioGroup"]:checked').value;
        console.log('Selected Radio Button Value:', selectedOption);
    };

    // uncheck Radio 
    const [value5, setValue5] = useState(false);
    const onChange5 = (e) => {
        console.log('radio 4 checked', value4);
        setValue5(!value5);
    };
    /////////////////////////////

    // get value from radio design system 
    const onChange6 = (e) => {
        console.log('radio 6 checked', e.target.value);
    };
    /////////////////////////////

    const [value4, setValue4] = useState('');
    const onChange4 = ({ target: { value } }) => {
        console.log('radio 4 checked', value);
        setValue4(value);
    };

    return (
        <div>

            <br />
            <br />
            <br />

            {/* uncheck Radio */}
            <Input.Radio
                name="radioGroup1"
                onChange={onChange5}
                checked={value5}
                onClick={onChange5}
            >
                unhceck radio
            </Input.Radio>
            {/* end.... */}

            <br />
            <br />
            <br />

            {/* Get value from Radio */}
            <Input.Radio
                name="radio1"
                onChange={onChange6}
                // onClick={onChange6}
                value={'appye pie'}
                radioType="secondary"
            >
                Radio get value
            </Input.Radio>
            {/* end.... */}

            <br />
            <br />
            <br />


            <form onSubmit={handleSubmit}>
                {/* <input type="text" name="inputField" /> */}

                <Input.RadioList
                    name="radioGroup"
                    options={options}
                    onChange={onChange4}
                    direction="vertical"
                    value={value4}
                >
                </Input.RadioList>

                <Radio.Group
                    name="radioGroup"
                    options={options}
                    // onChange={onChange4}
                    value={value4}
                />


                <button type="submit">Submit</button>
            </form>
            <br />
        </div>
    )
}

export default Home
