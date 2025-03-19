
import { motion } from "framer-motion";
import { Download } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  downloadUrl?: string;
  viewUrl?: string;
  delay: number;
}

const ResourceCard = ({
  title,
  description,
  icon,
  downloadUrl,
  viewUrl,
  delay,
}: ResourceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-study-light-gray rounded-xl overflow-hidden glass-card card-effect"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-study-purple mr-3">
            {icon}
          </div>
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        <p className="text-muted-foreground text-sm mb-5">{description}</p>
        <div className="flex flex-wrap gap-2">
          {viewUrl && (
            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              View
            </a>
          )}
          {downloadUrl && (
            <a
              href={downloadUrl}
              download
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg bg-study-purple/20 text-study-purple hover:bg-study-purple/30 transition-colors"
            >
              <Download className="w-3.5 h-3.5 mr-1" />
              Download
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ResourceCard;
