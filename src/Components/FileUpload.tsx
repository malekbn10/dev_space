import React from 'react';
import { Upload, X } from 'lucide-react';

interface FileUploadProps {
  files: File[];
  onFileSelect: (files: FileList | null) => void;
  onRemoveFile: (index: number) => void;
}

export default function FileUpload({ files, onFileSelect, onRemoveFile }: FileUploadProps) {
  return (
    <div className="mt-4">
      <div className="flex items-center space-x-2">
        <label
          htmlFor="file-upload"
          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <Upload className="w-5 h-5" />
          <span>Add files</span>
          <input
            id="file-upload"
            type="file"
            multiple
            className="hidden"
            onChange={(e) => onFileSelect(e.target.files)}
            accept="image/*"
          />
        </label>
        <span className="text-sm text-gray-500">
          {files.length} file(s) selected
        </span>
      </div>

      {files.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="relative group"
            >
              <img
                src={URL.createObjectURL(file)}
                alt={`Preview ${index + 1}`}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <button
                onClick={() => onRemoveFile(index)}
                className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}