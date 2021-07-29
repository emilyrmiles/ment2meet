import React from "react";
import "./Form.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import formImage from './Saly-14.png';
import background from './Vector 132.svg';
import polygon from './Polygon 1.svg';
import Select from 'react-select';

// eslint-disable-next-line no-empty-pattern
const Step3 = props => {
    if (props.currentStep !== 3) {
      return null;
    }
    const options = [
        {
            label: "Personal Branding",
            value: "Personal Branding",
        },
        {
            label: "UI UX Design",
            value: "UI UX Design",
        },
        {
            label: "Startups & Innovation",
            value: "Startups & Innovation",
        },
        {
            label: "Product Design",
            value: "Product Design",
        },
        {
            label: "AAPI Representation",
            value: "AAPI Representation",
        },
        {
            label: "Mental Health",
            value: "Mental Health",
        },
        {
            label: "Women in Tech",
            value: "Women in Tech",
        },
        {
            label: "Black Lives Matter",
            value: "Black Lives Matter",
        },
        {
            label: "LGBTQIA+rights",
            value: "LGBTQIA+rights",
        },
    ];
    const customStyles = {
        control: (base, state) => ({
            ...base,
            boxShadow: "2px 5px 20px rgba(0, 0, 0, 0.25)",
            fontFamily: "Helvetica",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14px",
            marginTop: "20px",
            marginBottom: "10px"
            // You can also use state.isFocused to conditionally style based on the focus state
          }),
        option: (provided, state) => ({
          ...provided,
          borderBottom: '1px solid #30323D',
          backgroundColor: state.isSelected ? '#FFD481' : 'white',
          height: 40
        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
      }
    return (
    <div>
        <div className="previous-form" onClick={props.previous}>
            About<br/>Me
        </div>
        <div className="form-container step3">
            <div className="previous" onClick={props.previous}><FontAwesomeIcon icon={faArrowLeft} /></div>
            <div className="form-title">
                <h1>Mentor Preferences</h1>
                <p>Tell us about your ideal mentor.</p>
            </div>
            <div className="form-content">
                <div className="form-content-left">
                    <img src={formImage} alt="Saly-14"/>
                </div>
                <div className="form-content-right">
                    <div className="choices">
                        <img src={polygon} alt="polygon"/>    
                        <p>My mentor is passionate about...</p>
                        {/* <Select
                        styles={customStyles}
                        options={options}
                        onChange={props.handleChangeSelectPassion1}
                        />
                        <Select
                        styles={customStyles}
                        options={options}
                        onChange={props.handleChangeSelectPassion2}
                        />
                        <Select
                        styles={customStyles}
                        options={options}
                        onChange={props.handleChangeSelectPassion3}
                        /> */}
                        <select name="passion1" value={props.passion1} className="select" onChange={props.handleChange}>
                            <option disabled selected value=""> Select... </option>
                            {options.map((option) => (
                                props.passion2!==option.value && props.passion3!==option.value? <option value={option.value}>{option.label}</option> : null
                            ))}
                        </select>
                        <select name="passion2" value={props.passion2} className="select" onChange={props.handleChange}>
                        <option disabled selected value=""> Select... </option>
                            {options.map((option) => (
                                props.passion1!==option.value && props.passion3!==option.value? <option value={option.value}>{option.label}</option> : null
                            ))}
                        </select>
                        <select name="passion3" value={props.passion3} className="select" onChange={props.handleChange}> 
                        <option disabled selected value=""> Select... </option>
                            {options.map((option) => (
                                props.passion2!==option.value && props.passion1!==option.value? <option value={option.value}>{option.label}</option> : null
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <img className="purple" src={background} alt="background-purple"/>
            <div className="next" onClick={props.next}><FontAwesomeIcon icon={faArrowRight} /></div>
        </div>
        <div className="next-form" onClick={props.next}>
            Mentor<br/>Preferences:<br/>Career
        </div>
    </div>
  );
}

export default Step3;
