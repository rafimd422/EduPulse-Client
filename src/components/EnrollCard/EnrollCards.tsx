import Typography from "@mui/material/Typography";
import { Card, CardContent, CardMedia, Chip } from "@mui/material";

type EnrolledCourse = {
  coursethumbnall?: string;
  courseTitle?: string;
  teacher?: string;
  transecitonId?: string;
  paidAmount?: string | number;
};

type EnrollCardsProps = {
  courses: EnrolledCourse;
};

const EnrollCards = ({ courses }: EnrollCardsProps) => {
  const courseTitle = courses?.courseTitle ?? "";

  return (
    <Card sx={{ maxWidth: 360, height: "450px" }}>
      <CardMedia
        component="img"
        height="194"
        image={courses?.coursethumbnall ?? ""}
        alt={courseTitle}
      />
      <CardContent sx={{ textAlign: "start" }}>
        <Typography
          variant="h6"
          sx={{ fontSize: "1rem", fontWeight: "bold" }}
          color="text.secondary"
        >
          {courseTitle.slice(0, 101)}...
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.9rem",
            fontWeight: "bold",
            textAlign: "start",
          }}
          color="text.secondary"
        >
          By {courses?.teacher}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: ".8rem", fontWeight: "bold" }}
          color="text.secondary"
        >
          Transaction Id: {courses?.transecitonId}
        </Typography>
        <br />
        <Typography
          component="p"
          sx={{ fontSize: "1rem", fontWeight: "600" }}
          color="text.secondary"
        >
          Amount: ${courses?.paidAmount}
        </Typography>
        <Chip label="Paid" sx={{ marginLeft: "8px" }} color="success" />
        <Typography
          variant="h6"
          sx={{ fontSize: ".8rem", fontWeight: "bold", mt: "8px" }}
          color="text.secondary"
        >
          Transaction Id: {courses?.transecitonId}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EnrollCards;
