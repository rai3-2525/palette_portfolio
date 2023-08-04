import React, { useState, useEffect } from "react";
import styles from './Palette.module.css';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

export default function Palette ({ selectedOptions, setSelectedOptions }) {
  
  const { color, tone } = selectedOptions;

  // Controll Palette State
  const handleColorSelect = (color) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      color: color
    }));
  };
  const handleToneSelect = (tone) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      tone: tone
    }));
  };

  console.log(selectedOptions);

  return (
    <>
      {/* Color */}
      <div className={styles.container}>
          {/* 他の色が選択されたら初期化される */}
          <div
            title="purple"
            className={`${styles.palette} ${styles.purple} ${color === 'purple' ? styles.selected : '' }`}
            onClick={ () => handleColorSelect ('purple') }
          ></div>
          <div
            title="pink"
            className={`${styles.palette} ${styles.pink} ${color === 'pink' ? styles.selected : '' }`}
            onClick={ () => handleColorSelect ('pink') }
          ></div>
          <div
            title="red"
            className={`${styles.palette} ${styles.red} ${color === 'red' ? styles.selected : '' }`}
            onClick={ () => handleColorSelect ('red') }
          ></div>
          <div
            title="orange"
            className={`${styles.palette} ${styles.orange} ${color === 'orange' ? styles.selected : '' }`}
            onClick={ () => handleColorSelect ('orange') }
          ></div>
          <div
            title="yellow"
            className={`${styles.palette} ${styles.yellow} ${color === 'yellow' ? styles.selected : '' }`}
            onClick={ () => handleColorSelect ('yellow') }
          ></div>
          <div
            title="green"
            className={`${styles.palette} ${styles.green} ${color === 'green' ? styles.selected : '' }`}
            onClick={ () => handleColorSelect ('green') }
          ></div>
          <div
            title="blue"
            className={`${styles.palette} ${styles.blue} ${color === 'blue' ? styles.selected : '' }`}
            onClick={ () => handleColorSelect ('blue') }
          ></div>
          <div
            title="brown"
            className={`${styles.palette} ${styles.brown} ${color === 'brown' ? styles.selected : '' }`}
            onClick={ () => handleColorSelect ('brown') }
          ></div>
          <div
            title="black"
            className={`${styles.palette} ${styles.black} ${color === 'black' ? styles.selected : '' }`}
            onClick={ () => handleColorSelect ('black') }
          ></div>
          <div
            title="white"
            className={`${styles.palette} ${styles.white} ${color === 'white' ? styles.selected : '' }`}
            onClick={ () => handleColorSelect ('white') }
          ></div>
          <div
            title="silver"
            className={`${styles.palette} ${styles.silver} ${color === 'silver' ? styles.selected : '' }`}
            onClick={ () => handleColorSelect ('silver') }
          ></div>
          <div
            title="gold"
            className={`${styles.palette} ${styles.gold} ${color === 'gold' ? styles.selected : '' }`}
            onClick={ () => handleColorSelect ('gold') }
          ></div>
      </div>

      {/* Tone */}
      <div className={ styles.tone }>
        <FormControl>
          <div className={styles.formlabel}>カラートーン</div>
            <RadioGroup
              row
              aria-labelledby="tone-form"
              defaultValue="all"
              name="tone-group"          
            >
              <FormControlLabel
                control={<Radio/>}
                label="All"
                value="all"
                onChange={() => handleToneSelect ('')}/>
              <FormControlLabel
                control={<Radio/>}
                label="Normal"
                value="normal"
                onChange={() => handleToneSelect ('normal')}/>
              <FormControlLabel
                control={<Radio/>}
                label="Pastel"
                value="pastel"
                onChange={() => handleToneSelect ('pastel')}/>
              <FormControlLabel
                control={<Radio/>}
                label="Vintage"
                value="vintage"
                onChange={() => handleToneSelect ('vintage')}/>
              <FormControlLabel
                control={<Radio/>}
                label="Vivid"
                value="vivid"
                onChange={() => handleToneSelect ('vivid')}/>

            </RadioGroup>
        </FormControl>
      </div>

    </>
  );
}