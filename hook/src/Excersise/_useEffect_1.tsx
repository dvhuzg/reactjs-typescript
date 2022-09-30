import React, { useEffect } from "react";
import { useState } from "react";

const _useEffect_1 = () => {
  const [showAvt, setShowAvt] = useState<any>();
  useEffect(() => {
    return () => {
      showAvt && URL.revokeObjectURL(showAvt.preview);
    };
  }, [showAvt]);
  const handlePreviewAvatar = (e: any) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setShowAvt(file);
  };
  return (
    <div>
      <input type="file" onChange={handlePreviewAvatar} />

      {showAvt && <img src={showAvt.preview} alt="" width="80%" />}
    </div>
  );
};

export default _useEffect_1;
