
import { useParams } from "react-router-dom";
import { NotFound } from "./NotFound";
import { tools } from "@/data/tools";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ToolLayout } from "@/components/tool-layout";

export function ToolPage() {
  const { toolId } = useParams<{ toolId: string }>();
  const tool = tools.find(t => t.id === toolId);
  
  if (!tool) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ToolLayout
          title={tool.title}
          description={tool.description}
          acceptedFileTypes={tool.acceptedFileTypes}
          showDownloadButton={false}
        />
      </main>
      <Footer />
    </div>
  );
}
