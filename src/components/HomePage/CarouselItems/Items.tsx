import { Button, Paper } from "@mui/material";
import Link from "next/link";

export type CarouselCourse = {
  id: number;
  courseTitle: string;
  shortDescription: string;
  img: string;
  route: string;
};

type ItemsProps = {
  item: CarouselCourse;
};

const Items = ({ item }: ItemsProps) => {
  return (
    <Paper
      elevation={0}
      style={{
        position: "relative",
        backgroundImage: `url(${item.img})`,
        backgroundSize: "cover",
        minHeight: "500px",
      }}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          padding: "20px",
          borderRadius: "8px",
          color: "white",
          position: "absolute",
          bottom: 2,
          left: 0,
          right: 0,
        }}
      >
        <h2>{item.courseTitle}</h2>
        <p>{item.shortDescription}</p>
        <Link href={item.route}>
          <Button
            sx={{
              backgroundColor: "rgb(128, 0, 0)",
              color: "white",
              p: "12px",
            }}
            className="CheckButton"
          >
            Check it out!
          </Button>
        </Link>
      </div>
    </Paper>
  );
};

export default Items;
