
import { useState, useRef } from "react";
import { FileUp, X } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

interface FileUploadProps {
  accept?: string;
  maxSize?: number;
  onFileChange?: (file: File | null) => void;
  className?: string;
}

export function FileUpload({
  accept = "*",
  maxSize = 10 * 1024 * 1024, // 10MB default
  onFileChange,
  className = "",
}: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    
    const selectedFile = files[0];

    // Validate file size
    if (selectedFile.size > maxSize) {
      setError(`File is too large. Maximum size is ${maxSize / (1024 * 1024)}MB.`);
      return;
    }

    setFile(selectedFile);
    setError(null);
    if (onFileChange) onFileChange(selectedFile);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileChange(e.dataTransfer.files);
  };

  const handleRemoveFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (onFileChange) onFileChange(null);
  };

  return (
    <Card className={`relative ${className}`}>
      {file ? (
        <div className="p-4 flex items-center justify-between">
          <div className="truncate">
            <p className="font-medium">{file.name}</p>
            <p className="text-sm text-muted-foreground">
              {(file.size / 1024).toFixed(2)} KB
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRemoveFile}
            className="ml-2"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      ) : (
        <div
          className={`p-6 flex flex-col items-center justify-center border-2 border-dashed rounded-lg transition-colors ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/30"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <FileUp className="h-10 w-10 text-muted-foreground mb-2" />
          <p className="mb-1 font-medium">Drag and drop a file here</p>
          <p className="text-sm text-muted-foreground mb-3">
            or click to browse files
          </p>
          <Button
            variant="secondary"
            onClick={() => fileInputRef.current?.click()}
          >
            Select File
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            accept={accept}
            onChange={(e) => handleFileChange(e.target.files)}
            className="hidden"
          />
          {error && (
            <p className="mt-2 text-sm text-destructive">{error}</p>
          )}
        </div>
      )}
    </Card>
  );
}
