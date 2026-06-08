import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import Link from "next/link";

type CourseCardsProps = {
  course: {
    _id: string;
    title: string;
    price: string;
    shortDesc: string;
    courseOutline: string;
    image: string;
    teacher: string;
    teacherMail: string;
    userImage: string;
    status: string;
    enrollCount: number;
  };
};

const CourseCards: React.FC<CourseCardsProps> = ({ course }) => {
  const price = String(course.price ?? "").trim();
  const priceLabel = price
    ? price.startsWith("$")
      ? price
      : `$${price}`
    : "Free";

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: 2,
        border: "1px solid #e2e8f0",
        bgcolor: "#fff",
        boxShadow: "0 18px 50px rgba(15, 23, 42, 0.08)",
        transition: "transform 220ms ease, box-shadow 220ms ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 28px 70px rgba(15, 23, 42, 0.13)",
        },
      }}
    >
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <CardMedia
          component="img"
          image={course.image}
          alt={course.title}
          sx={{
            height: 214,
            objectFit: "cover",
            display: "block",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(15, 23, 42, 0.02) 34%, rgba(15, 23, 42, 0.48) 100%)",
          }}
        />
        <Chip
          label={priceLabel}
          sx={{
            position: "absolute",
            top: 14,
            right: 14,
            height: 34,
            borderRadius: 999,
            bgcolor: "#fff",
            color: "#800000",
            border: "1px solid rgba(128, 0, 0, 0.14)",
            fontFamily:
              'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontSize: 13,
            fontWeight: 900,
            boxShadow: "0 12px 28px rgba(15, 23, 42, 0.18)",
          }}
        />
      </Box>

      <CardContent sx={{ p: 2.5, flexGrow: 1 }}>
        <Stack direction="row" spacing={1.5} sx={{ mb: 2, alignItems: "center" }}>
          <Avatar
            src={course.userImage}
            alt={course.teacher}
            sx={{
              width: 42,
              height: 42,
              border: "2px solid #fff",
              boxShadow: "0 8px 22px rgba(15, 23, 42, 0.12)",
            }}
          />
          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{
                color: "#0f172a",
                fontFamily:
                  'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontSize: 13,
                fontWeight: 800,
                lineHeight: 1.25,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {course.teacher}
            </Typography>
            <Typography
              sx={{
                color: "#64748b",
                fontFamily:
                  'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontSize: 12,
                fontWeight: 600,
                lineHeight: 1.35,
              }}
            >
              Instructor
            </Typography>
          </Box>
        </Stack>

        <Typography
          component="h3"
          sx={{
            color: "#111827",
            fontFamily: '"EB Garamond", Georgia, serif',
            fontSize: { xs: "1.45rem", md: "1.55rem" },
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: 0,
            minHeight: 56,
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {course.title}
        </Typography>

        <Typography
          sx={{
            mt: 1.5,
            minHeight: 68,
            color: "#475569",
            fontFamily:
              'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontSize: 14,
            fontWeight: 500,
            lineHeight: 1.6,
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
        >
          {course.shortDesc}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap", rowGap: 1 }}>
          <Chip
            icon={<PeopleAltRoundedIcon />}
            label={`${course.enrollCount ?? 0} enrolled`}
            size="small"
            sx={{
              borderRadius: 999,
              bgcolor: "#f0fdfa",
              color: "#0f766e",
              border: "1px solid #ccfbf1",
              fontFamily:
                'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontSize: 12,
              fontWeight: 800,
              ".MuiChip-icon": {
                color: "#0f766e",
              },
            }}
          />
        </Stack>
      </CardContent>

      <CardActions sx={{ p: 2.5, pt: 0 }} disableSpacing>
        <Link href={`/allclasses/${course?._id}`} passHref legacyBehavior>
          <Button
            component="a"
            fullWidth
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              minHeight: 48,
              borderRadius: 2,
              bgcolor: "#800000",
              color: "#fff",
              fontFamily:
                'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              fontSize: 14,
              fontWeight: 900,
              textTransform: "none",
              boxShadow: "0 14px 30px rgba(128, 0, 0, 0.22)",
              "&:hover": {
                bgcolor: "#5f0000",
                boxShadow: "0 18px 40px rgba(128, 0, 0, 0.28)",
              },
            }}
          >
            Enroll Now
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CourseCards;
