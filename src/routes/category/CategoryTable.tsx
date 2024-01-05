import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CategoryTable = () => {
  type categories = {
    id: string;
    name: string;
    is_active: boolean;
  };

  const categories = [
    {
      id: "bb75cd96-1395-4241-91f3-9ad863de8f71",
      name: "mock category",
      is_active: false,
    },
  ];

  return (
    <Table>
      <TableCaption>List of Category </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Is Active</TableHead>
          <TableHead>Control</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category) => (
          <TableRow key={category.id}>
            <TableCell>{category.id}</TableCell>
            <TableCell>{category.name}</TableCell>
            <TableCell>{category.is_active}</TableCell>
            <TableCell>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default CategoryTable;
