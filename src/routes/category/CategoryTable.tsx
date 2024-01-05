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
    <div className=" mt-6 flex justify-center w-full">
      <div className=" w-full max-w-[1024px] min-w-[768px]">
        <Table>
          <TableCaption>List of Category </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Id</TableHead>
              <TableHead className="text-center">Name</TableHead>
              <TableHead className="text-center">Is Active</TableHead>
              <TableHead className="w-[170px] text-center">Control</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.id}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.is_active}</TableCell>
                <TableCell className="flex justify-between">
                  <Button className=" w-[65px]" size={"sm"}>
                    Edit
                  </Button>
                  <Button
                    className=" w-[65px]"
                    size={"sm"}
                    variant={"destructive"}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default CategoryTable;
