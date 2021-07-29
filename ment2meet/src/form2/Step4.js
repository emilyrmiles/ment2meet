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
const Step4 = props => {
    if (props.currentStep !== 4) {
      return null;
    }
    
    const options = [
        {
            label: "Apple",
            value: "apple",
        },
        {
            label: "Mango",
            value: "mango",
        },
        {
            label: "Banana",
            value: "banana",
        },
        {
            label: "Pineapple",
            value: "pineapple",
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
          color: state.isSelected ? '#30323D' : '#30323D',
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
            Mentor<br/>Preferences:<br/>Passion
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
                        <p>My mentor works in...</p>
                        {/* <Select
                        styles={customStyles}
                        options={options}
                        onChange={props.handleChangeSelectCareer1}
                        />
                        <Select
                        styles={customStyles}
                        options={options}
                        onChange={props.handleChangeSelectCareer2}
                        />
                        <Select
                        styles={customStyles}
                        options={options}
                        onChange={props.handleChangeSelectCareer3}
                        /> */}
                        <select name="career1" value={props.career1!==""?props.career1:null} className="select" onChange={props.handleChange}>
                            <option disabled selected value> Select... </option>
                            {options.map((option) => (
                                props.career2!==option.value && props.career3!==option.value? <option value={option.value}>{option.label}</option> : null
                            ))}
                        </select>
                        <select name="career2" value={props.career2!==""?props.career2:null} className="select" onChange={props.handleChange}>
                            <option disabled selected value> Select... </option>
                            {options.map((option) => (
                                props.career1!==option.value && props.career3!==option.value? <option value={option.value}>{option.label}</option> : null
                            ))}
                        </select>
                        <select name="career3" value={props.career3!==""?props.career3:null} className="select" onChange={props.handleChange}> 
                            <option disabled selected value> Select... </option>
                            {options.map((option) => (
                                props.career2!==option.value && props.career1!==option.value? <option value={option.value}>{option.label}</option> : null
                            ))}
                        </select>
                        
                <input type="submit" value="Register"/>
                    </div>
                </div>
            </div>
            <img className="purple" src={background} alt="background-purple"/>
            <div className="next" onClick={props.next}><FontAwesomeIcon icon={faArrowRight} /></div>
        </div>
        <div className="next-form" onClick={props.next}>
        View<br/>Matches
        </div>
    </div>
  );
}

export default Step4;
