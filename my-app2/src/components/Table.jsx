import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import "./Table.css";

const Table = () => {
  return (
    <div>
      <table border="4">
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
};

export default Table;
