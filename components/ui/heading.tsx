import { cn } from "@/utils/cn";

interface HeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div>
      <h2 className={cn("text-2xl font-bold tracking-tight", className)}>
        {title}
      </h2>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
};
