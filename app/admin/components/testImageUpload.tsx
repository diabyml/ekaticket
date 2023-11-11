"use client";

import ImageUpload from "@/components/UploadImage";
import React, { useState } from "react";

function TestImageUpload() {
  const [imageUrl, setImageUrl] = useState("");
  return (
    <div>
      <ImageUpload
        value={imageUrl ? [imageUrl] : []}
        //   disabled={loading}
        onChange={(url) => setImageUrl(url)}
        onRemove={() => setImageUrl("")}
      />
    </div>
  );
}

export default TestImageUpload;
