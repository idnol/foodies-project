'use client'

import classes from './image-picker.module.css';
import {useRef, useState} from "react";
import Image from "next/image";

export default function ImagePicker({label, name}) {
  const [preview, setPreview] = useState();
  const imageInput = useRef();
  const handlePickClick = () => imageInput.current.click();

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPreview(fileReader.result);
    }

    fileReader.readAsDataURL(file);
  }

  return <div className={classes.picker}>
    <label htmlFor={name}>{label}</label>
    <div className={classes.controls}>
      <div className={classes.preview}>
        {!preview && <p>Not yet image</p>}
        {preview && <Image src={preview} alt="Image selected" fill /> }
      </div>
      <input className={classes.input} type="file" id={name} accept="image/png, image/jpeg" name={name} ref={imageInput} onChange={handleImageChange}/>
      <button type='button' className={classes.button} onClick={handlePickClick}>Pick an image</button>
    </div>
  </div>
}