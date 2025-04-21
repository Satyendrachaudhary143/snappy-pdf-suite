
import { ReactNode } from "react";
import { FileUpload } from "./ui/file-upload";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";

interface ToolLayoutProps {
  title: string;
  description: string;
  acceptedFileTypes: string;
  children?: ReactNode;
  showDownloadButton?: boolean;
}

export function ToolLayout({
  title,
  description,
  acceptedFileTypes,
  children,
  showDownloadButton = false,
}: ToolLayoutProps) {
  return (
    <div className="container py-8">
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-brand-600 hover:text-brand-700">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Tools
        </Link>
      </div>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Upload File</CardTitle>
              <CardDescription>
                Select or drag and drop your file here
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FileUpload accept={acceptedFileTypes} />
              <div className="mt-4">
                <Button className="w-full bg-brand-600 hover:bg-brand-700">
                  Process File
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Preview</CardTitle>
                {showDownloadButton && (
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center border-2 border-dashed rounded-lg border-muted-foreground/20">
              {children || (
                <div className="text-center text-muted-foreground">
                  <p>No file selected</p>
                  <p className="text-sm">Upload a file to see preview</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
