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
import { CATEGORY_API_URL } from "@/utils/constant";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddCategory } from "./AddCategoryDialog";

const CategoryTable = () => {
  const token = localStorage.getItem("revou-w10-token") ?? "";

  type categories = {
    id: string;
    name: string;
    is_active: boolean;
  };

  const [categories, setCategories] = useState<categories[]>([]);
  const navigate = useNavigate();

  const fetchDataWithToken = async () => {
    const authToken = token;
    if (authToken) {
      try {
        const response = await fetch(CATEGORY_API_URL, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`, // Attach token in the header
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCategories(data.data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Fetch data error:", error);
      }
    } else {
      navigate("/login");
      console.log("User is not logged in");
      console.log(token);
    }
  };

  useEffect(() => {
    fetchDataWithToken();
  }, [categories]);

  const deleteData = async (idToDelete: any) => {
    const authToken = token;
    try {
      const response = await fetch(
        `https://mock-api.arikmpt.com/api/category/${idToDelete}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setCategories(data.data);
        console.log("Successfully deleted data");
      } else {
        // Request was not successful
        console.error("Failed to delete data:", response.statusText);
      }
    } catch (error) {
      console.error("Error occurred while deleting data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className=" mt-2 overflow-x-scroll p-4">
        <div className="w-full flex justify-between my-3 px-6">
          <span className="text-2xl font-bold"> Table of Category</span>
          {/* <Button className=" bg-green-600">Add Category</Button> */}
          <AddCategory  />
        </div>
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
                  <TableCell className="text-center">{category.id}</TableCell>
                  <TableCell className="text-center">{category.name}</TableCell>
                  <TableCell className="text-center">
                    {category.is_active ? (
                      <span>Active</span>
                    ) : (
                      <span>Inactive</span>
                    )}
                  </TableCell>
                  <TableCell className="flex justify-between">
                    <Button className=" w-[65px]" size={"sm"}>
                      Edit
                    </Button>
                    <Button
                      className=" w-[65px]"
                      size={"sm"}
                      variant={"destructive"}
                      onClick={() => deleteData(category.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div>Pagination</div>
      </div>
    </div>
  );
};
export default CategoryTable;
