import React, { useState } from 'react';

interface FileUploadProps {
  onUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
    if (selectedFile) {
      onUpload(selectedFile);
    }
  };

  return (
    <div className="file-upload">
      <input type="file" onChange={handleFileChange} />
      {file && <p>{file.name}</p>}
    </div>
  );
};

export default FileUpload;