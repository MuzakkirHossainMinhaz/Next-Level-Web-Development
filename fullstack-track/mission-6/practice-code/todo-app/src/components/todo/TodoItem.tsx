import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

interface TodoItemProps {
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  onDelete?: () => void;
  onEdit?: (title: string, description: string, priority: "low" | "medium" | "high") => void;
  onToggle?: () => void;
  completed?: boolean;
}

const priorityColors = {
  low: "bg-slate-100 border-slate-200",
  medium: "bg-yellow-50 border-yellow-200",
  high: "bg-red-50 border-red-200",
};

const priorityTextColors = {
  low: "text-slate-700",
  medium: "text-yellow-700",
  high: "text-red-700",
};

const TodoItem = ({
  title: initialTitle,
  description: initialDescription,
  priority: initialPriority,
  onDelete,
  onEdit,
  onToggle,
  completed = false,
}: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [priority, setPriority] = useState(initialPriority);

  const handleSubmit = () => {
    if (title.trim() && description.trim()) {
      onEdit?.(title, description, priority);
      setIsEditing(false);
    }
  };

  return (
    <>
      <div
        className={cn(
          "flex items-center gap-4 p-4 border rounded-lg transition-colors",
          priorityColors[initialPriority],
          completed && "opacity-60"
        )}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
          className="h-5 w-5 rounded-md border-2 border-primary"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className={cn("font-medium", priorityTextColors[initialPriority], completed && "line-through")}>
              {initialTitle}
            </h3>
            <span className={cn("text-xs px-2 py-1 rounded-full", priorityTextColors[initialPriority], "bg-white/50")}>
              {initialPriority.charAt(0).toUpperCase() + initialPriority.slice(1)}
            </span>
          </div>
          <p className={cn("text-sm text-muted-foreground", completed && "line-through")}>{initialDescription}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-600 hover:bg-blue-50"
          >
            <FiEdit2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onDelete}
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <FiTrash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Todo</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Input placeholder="Todo title" autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
            <Textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="resize-none"
            />
            <Select value={priority} onValueChange={(value: "low" | "medium" | "high") => setPriority(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TodoItem;
