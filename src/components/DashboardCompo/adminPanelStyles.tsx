import React from "react";
import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

export const adminAccent = "#d92d20";
export const adminAccentDark = "#b42318";
export const adminText = "#101828";
export const adminMutedText = "#667085";

export const adminPageSx: SxProps<Theme> = {
  width: "100%",
  maxWidth: "1280px",
  mx: "auto",
  py: { xs: 2, md: 3 },
};

export const adminTableCardSx: SxProps<Theme> = {
  overflow: "hidden",
  borderRadius: "24px",
  border: "1px solid rgba(16, 24, 40, 0.08)",
  backgroundColor: "rgba(255, 255, 255, 0.92)",
  boxShadow: "0 20px 50px rgba(16, 24, 40, 0.08)",
};

export const adminDataGridSx: SxProps<Theme> = {
  border: 0,
  color: adminText,
  fontFamily:
    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  "& .MuiDataGrid-main": {
    borderRadius: 0,
  },
  "& .MuiDataGrid-columnHeaders": {
    minHeight: "58px !important",
    borderBottom: "1px solid #e6eaf0",
    backgroundColor: "#f8fafc",
  },
  "& .MuiDataGrid-columnHeader": {
    outline: "none !important",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    color: "#475467",
    fontSize: "0.76rem",
    fontWeight: 800,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },
  "& .MuiDataGrid-cell": {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #eef2f7",
    outline: "none !important",
  },
  "& .MuiDataGrid-row": {
    backgroundColor: "#fff",
  },
  "& .MuiDataGrid-row:hover": {
    backgroundColor: "#fff8f7",
  },
  "& .MuiDataGrid-cellContent": {
    color: "#344054",
    fontWeight: 600,
  },
  "& .MuiDataGrid-footerContainer": {
    minHeight: "62px",
    borderTop: "1px solid #eef2f7",
    backgroundColor: "#fff",
  },
  "& .MuiTablePagination-root": {
    color: "#475467",
  },
  "& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows": {
    m: 0,
    fontSize: "0.86rem",
    fontWeight: 600,
  },
  "& .MuiTablePagination-select": {
    borderRadius: "10px",
    backgroundColor: "#f8fafc",
  },
  "& .MuiDataGrid-overlayWrapper": {
    minHeight: "180px",
  },
};

const baseButtonSx = {
  minHeight: 34,
  borderRadius: "999px",
  px: 1.8,
  textTransform: "none",
  fontWeight: 800,
  boxShadow: "0 8px 18px rgba(16, 24, 40, 0.12)",
  "&.Mui-disabled": {
    color: "#98a2b3",
    backgroundColor: "#eef2f6",
    boxShadow: "none",
  },
};

export const approveButtonSx: SxProps<Theme> = {
  ...baseButtonSx,
  color: "#fff",
  backgroundColor: adminAccent,
  "&:hover": {
    backgroundColor: adminAccentDark,
    boxShadow: "0 10px 22px rgba(217, 45, 32, 0.24)",
  },
};

export const rejectButtonSx: SxProps<Theme> = {
  ...baseButtonSx,
  color: "#b42318",
  borderColor: "rgba(180, 35, 24, 0.22)",
  backgroundColor: "#fff5f4",
  boxShadow: "none",
  "&:hover": {
    borderColor: "rgba(180, 35, 24, 0.36)",
    backgroundColor: "#ffe7e4",
    boxShadow: "0 8px 18px rgba(180, 35, 24, 0.1)",
  },
};

export const successButtonSx: SxProps<Theme> = {
  ...baseButtonSx,
  color: "#067647",
  backgroundColor: "#ecfdf3",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#dcfae6",
  },
};

export const dangerButtonSx: SxProps<Theme> = {
  ...baseButtonSx,
  color: "#b42318",
  backgroundColor: "#fef3f2",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#fee4e2",
  },
};

interface AdminPageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export const AdminPageHeader: React.FC<AdminPageHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  icon,
}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: { xs: "flex-start", sm: "center" },
      justifyContent: "space-between",
      gap: 2,
      mb: 3,
      flexDirection: { xs: "column", sm: "row" },
    }}
  >
    <Box>
      <Typography
        component="p"
        sx={{
          mb: 0.75,
          color: adminAccent,
          fontSize: "0.78rem",
          fontWeight: 900,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {eyebrow}
      </Typography>
      <Typography
        component="h1"
        sx={{
          color: adminText,
          fontSize: { xs: "2rem", md: "2.6rem" },
          fontWeight: 900,
          lineHeight: 1.05,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          mt: 1,
          maxWidth: 680,
          color: adminMutedText,
          fontSize: "1rem",
          lineHeight: 1.6,
        }}
      >
        {subtitle}
      </Typography>
    </Box>
    <Box
      sx={{
        flex: "0 0 auto",
        display: "grid",
        placeItems: "center",
        width: 68,
        height: 68,
        borderRadius: "22px",
        color: adminAccent,
        border: "1px solid rgba(217, 45, 32, 0.12)",
        background:
          "linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 238, 235, 0.82))",
        boxShadow: "0 18px 36px rgba(217, 45, 32, 0.12)",
        "& svg": {
          fontSize: 34,
        },
      }}
    >
      {icon}
    </Box>
  </Box>
);

interface AdminTableCardProps {
  title: string;
  subtitle: string;
  minWidth?: number;
  children: React.ReactNode;
}

export const AdminTableCard: React.FC<AdminTableCardProps> = ({
  title,
  subtitle,
  minWidth = 760,
  children,
}) => (
  <Paper elevation={0} sx={adminTableCardSx}>
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={1}
      sx={{
        alignItems: { xs: "flex-start", sm: "center" },
        justifyContent: "space-between",
        px: { xs: 2, sm: 3 },
        py: 2.4,
        borderBottom: "1px solid #eef2f7",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(248,250,252,0.72))",
      }}
    >
      <Box>
        <Typography sx={{ color: adminText, fontWeight: 900, fontSize: "1.1rem" }}>
          {title}
        </Typography>
        <Typography sx={{ mt: 0.4, color: adminMutedText, fontSize: "0.9rem" }}>
          {subtitle}
        </Typography>
      </Box>
    </Stack>
    <Box sx={{ width: "100%", overflowX: "auto" }}>
      <Box sx={{ minWidth, width: "100%" }}>{children}</Box>
    </Box>
  </Paper>
);

const statusTones: Record<
  string,
  { color: string; backgroundColor: string; borderColor: string }
> = {
  approved: {
    color: "#067647",
    backgroundColor: "#ecfdf3",
    borderColor: "#abefc6",
  },
  rejected: {
    color: "#b42318",
    backgroundColor: "#fef3f2",
    borderColor: "#fecdca",
  },
  pending: {
    color: "#b54708",
    backgroundColor: "#fffaeb",
    borderColor: "#fedf89",
  },
};

const roleTones: Record<
  string,
  { color: string; backgroundColor: string; borderColor: string }
> = {
  admin: {
    color: "#b42318",
    backgroundColor: "#fff5f4",
    borderColor: "#fecdca",
  },
  teacher: {
    color: "#175cd3",
    backgroundColor: "#eff8ff",
    borderColor: "#b2ddff",
  },
  student: {
    color: "#067647",
    backgroundColor: "#ecfdf3",
    borderColor: "#abefc6",
  },
};

const formatBadgeLabel = (value?: string) => {
  if (!value) return "Unknown";
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};

export const StatusBadge: React.FC<{ status?: string }> = ({ status }) => {
  const normalized = status?.toLowerCase() || "unknown";
  const tone = statusTones[normalized] || {
    color: "#475467",
    backgroundColor: "#f8fafc",
    borderColor: "#e4e7ec",
  };

  return (
    <Chip
      size="small"
      label={formatBadgeLabel(status)}
      sx={{
        minWidth: 86,
        borderRadius: "999px",
        border: `1px solid ${tone.borderColor}`,
        color: tone.color,
        backgroundColor: tone.backgroundColor,
        fontWeight: 900,
      }}
    />
  );
};

export const RoleBadge: React.FC<{ role?: string }> = ({ role }) => {
  const normalized = role?.toLowerCase() || "unknown";
  const tone = roleTones[normalized] || {
    color: "#475467",
    backgroundColor: "#f8fafc",
    borderColor: "#e4e7ec",
  };

  return (
    <Chip
      size="small"
      label={formatBadgeLabel(role)}
      sx={{
        minWidth: 78,
        borderRadius: "999px",
        border: `1px solid ${tone.borderColor}`,
        color: tone.color,
        backgroundColor: tone.backgroundColor,
        fontWeight: 900,
      }}
    />
  );
};
