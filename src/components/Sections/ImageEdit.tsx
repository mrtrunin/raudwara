import React from "react";
import { SectionEditProps } from "./Section.model";
import { Button, Upload } from "antd";
import { uploadImage } from "../../api/api";

const ImageEdit = ({ section, onSectionChange }: SectionEditProps) => {
  const onImageChange = (newImageUrl: string | undefined) => {
    onSectionChange({ ...section, url: newImageUrl });
    // TODO: need to go with replacing the component straight away
  };

  const onImageUpload = async (options: any) => {
    const { onSuccess, onError, file } = options;

    const fmData = new FormData();
    fmData.append("file", file);

    try {
      const res = await uploadImage(fmData);
      onSuccess(onImageChange(res.url));
    } catch (err) {
      console.log("Error: ", err);
      onError({ err });
    }
  };

  return (
    <Upload name="file" customRequest={onImageUpload} accept=".svg, .png, .jpg">
      <Button>Upload Image</Button>
    </Upload>
  );
};

export default ImageEdit;
