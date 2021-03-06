import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import './style.css';
import { FiUpload } from 'react-icons/fi'

interface props {
  onFileUploade: (file: File) => void;
};

const Dropzone: React.FunctionComponent<props> = ({ onFileUploade }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);
    onFileUploade(file);
  }, [onFileUploade])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*'
  })

  return (
    <div className='dropzone' {...getRootProps()}>
      <input {...getInputProps()} accept='image/*' />

      {selectedFileUrl
        ? <img src={selectedFileUrl} alt="Point thumbnail" />
        :
        <p>
          <FiUpload />
          Imagem do estabelecimento
          </p>
      }

    </div>
  )
}

export default Dropzone;