import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiFilter } from "react-icons/fi";

interface TodoHeaderProps {
  onFilterChange?: (filter: string) => void;
}

const TodoHeader = ({ onFilterChange }: TodoHeaderProps) => {
  return (
    <div className="flex items-center justify-between py-4 px-6 bg-card rounded-t-lg border-b">
      <h1 className="text-2xl font-semibold bg-gradient-to-r from-emerald-500 to-teal-700 text-transparent bg-clip-text">
        My Todos
      </h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <FiFilter className="w-4 h-4" />
            Filter
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => onFilterChange?.("all")}>All</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => onFilterChange?.("high")}>High</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => onFilterChange?.("medium")}>Medium</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => onFilterChange?.("low")}>Low</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TodoHeader;
