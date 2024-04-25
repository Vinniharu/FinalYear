import React, { useState, useEffect } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "../../../firebase";
import UploadModal from "./UploadModal";

const UploadItem = (props) => {
  const [noteURL, setNoteURL] = useState([]);
  const [fileUpload, setFileUpload] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  useEffect(() => {
    if (fileUpload === null) {
      return;
    }
    setLoading(true);
    setVisible(true);
    const storage = getStorage(app);
    const storageRef = ref(storage, `Notes/${props.code}/${props.item}`);

    uploadBytes(storageRef, fileUpload).then(() => {
      setIsUploaded(true);
    });
  }, [fileUpload]);

  useEffect(() => {
    if (!isUploaded) {
      return;
    }

    const storage = getStorage(app);
    getDownloadURL(ref(storage, `Notes/${props.code}/${props.item}`))
      .then((url) => {
        setNoteURL([...noteURL, url]);
        setLoading(false);
        setTimeout(() => {
          setVisible(false);
        }, 2000);
        setIsUploaded(false)
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setVisible(false);
        setIsUploaded(false)
      });
  }, [isUploaded]);

  useEffect(() => {
    props.onChange(noteURL);
  }, [noteURL]);

  return (
    <>
      <label
        htmlFor={props.name}
        className="flex flex-col gap-4 text-lg font-semibold mb-4"
      >
        {props.name}
        <div className="rounded-md border-2 p-2 text-base">
          <input
            type="file"
            id={props.name}
            onChange={(event) => setFileUpload(event.target.files[0])}
            required
          />
        </div>
        <p>
          Add each desired files till satisfied. <br />
          <span className="font-bold text-red-600">{noteURL.length}</span> files
          have been added.
        </p>
        {noteURL.length !== 0 && (
          <button
            className="m-auto block bg-red-600 text-white font-semibold p-2 rounded-md"
            onClick={() => setNoteURL([])}
          >
            Clear
          </button>
        )}
      </label>
      {visible ? (
        <UploadModal
          initial="Uploading File"
          end="Uploaded"
          loading={loading}
          close={setVisible}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default UploadItem;
