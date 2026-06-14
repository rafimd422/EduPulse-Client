import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import { Box, Button, Chip, Paper, Stack, Typography } from "@mui/material";
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
  index: number;
  total: number;
};

const Items = ({ item, index, total }: ItemsProps) => {
  return (
    <Paper
      elevation={0}
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: 460, sm: 500, md: 560 },
        borderRadius: { xs: "20px", md: "26px" },
        backgroundColor: "#101828",
        backgroundImage: `
          linear-gradient(90deg, rgba(3, 7, 18, 0.90) 0%, rgba(3, 7, 18, 0.68) 43%, rgba(3, 7, 18, 0.16) 100%),
          url(${item.img})
        `,
        backgroundSize: "cover",
        backgroundPosition: { xs: "center", md: "center" },
        color: "#fff",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0) 34%, rgba(3,7,18,0.34) 100%)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          minHeight: { xs: 460, sm: 500, md: 560 },
          display: "flex",
          alignItems: "flex-end",
          p: { xs: 2, sm: 3, md: 5 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 560,
            borderRadius: { xs: "20px", md: "24px" },
            border: "1px solid rgba(255, 255, 255, 0.16)",
            backgroundColor: "rgba(255, 255, 255, 0.10)",
            backdropFilter: "blur(18px)",
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.24)",
            p: { xs: 2.2, sm: 3, md: 3.5 },
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            flexWrap="wrap"
            sx={{ mb: 2, alignItems: "center" }}
          >
            <Chip
              icon={<MenuBookRoundedIcon />}
              label={`Course ${String(index + 1).padStart(2, "0")}`}
              sx={{
                color: "#fff",
                backgroundColor: "rgba(255, 255, 255, 0.14)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                fontWeight: 800,
                "& .MuiChip-icon": {
                  color: "#fecaca",
                },
              }}
            />
            <Chip
              label={`${index + 1} / ${total}`}
              sx={{
                color: "rgba(255, 255, 255, 0.82)",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                fontWeight: 800,
              }}
            />
          </Stack>

          <Typography
            component="h3"
            sx={{
              maxWidth: 500,
              fontFamily: '"EB Garamond", Georgia, serif',
              fontSize: { xs: "2rem", sm: "2.45rem", md: "3rem" },
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: 0,
              textWrap: "balance",
            }}
          >
            {item.courseTitle}
          </Typography>

          <Typography
            sx={{
              mt: 1.6,
              maxWidth: 470,
              color: "rgba(255, 255, 255, 0.78)",
              fontSize: { xs: "0.98rem", md: "1.05rem" },
              fontWeight: 600,
              lineHeight: 1.75,
            }}
          >
            {item.shortDescription}
          </Typography>

          <Button
            component={Link}
            href={item.route}
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              mt: 3,
              minHeight: 50,
              px: 2.6,
              borderRadius: "16px",
              color: "#101828",
              backgroundColor: "#fff",
              fontWeight: 900,
              textTransform: "none",
              boxShadow: "0 16px 34px rgba(255, 255, 255, 0.18)",
              "&:hover": {
                backgroundColor: "#fff1f0",
                boxShadow: "0 18px 38px rgba(255, 255, 255, 0.24)",
              },
            }}
            className="CheckButton"
          >
            Check it out!
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default Items;
