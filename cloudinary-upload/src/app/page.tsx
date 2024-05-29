'use client'

import { useState } from "react";

export default function Home() {
  const [imageURLs, setImageURLs] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const form = event.currentTarget;

    const fileInput = Array.from(form.elements).find(
      (element) => (element as HTMLInputElement).name ==='file'
    ) as HTMLInputElement;
    const formData = new FormData();
    if(fileInput?.files){
      Array.from(fileInput.files).forEach((file) => {
        formData.append('files', file);
      })
    } 

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    fileInput.value = '';
    const data = await res.json();
    setImageURLs(data.urls);
    setLoading(false);
  }

  return (
    <div className=" w-full min-h-screen flex justify-center items-center flex-col">
      <form className="w-fit  h-fit" onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">imagenes</label>
          <input multiple type="file" name="file" id="first_name" className="file-input" placeholder="John" required />
        <div className="w-full grid mt-2 font-medium text-sm">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading && <span className="loading loading-spinner"></span>}
            {loading ? 'cargando/loading' : 'entregar/submit'}
          </button>
        </div>
      </form>
      <div className=" max-w-xl flex flex-col mt-10">
        {imageURLs && imageURLs.map((url) => (
            <img src={url} className="w-ful my-2"/>
        ))}
      </div>
    </div>
  );
}
