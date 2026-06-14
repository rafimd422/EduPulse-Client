import React from "react";
import DashboardLayout from "@/DashboardLayout";
import {
  Avatar,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Head from "next/head";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import loading from "../../../../assets/Loading/loading.json";
import dynamic from "next/dynamic";
import Swal from "sweetalert2";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import {
  AdminPageHeader,
  AdminTableCard,
  StatusBadge,
  adminDataGridSx,
  adminPageSx,
  approveButtonSx,
  dangerButtonSx,
  rejectButtonSx,
  successButtonSx,
} from "@/components/DashboardCompo/adminPanelStyles";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface Course {
  _id: string;
  teacher: string;
  title: string;
  teacherMail: string;
  shortDesc: string;
  userImage: string;
  status: string;
}

const AllClasses: React.FC = () => {
  const axiosSecure = useAxiosSecure();

  const handleAddCourse = async (): Promise<Course[]> => {
    const res = await axiosSecure.get("/classreq");
    return res.data;
  };

  const {
    data: courses,
    isLoading,
    refetch,
  } = useQuery<Course[]>({
    queryKey: ["AllCourses"],
    queryFn: handleAddCourse,
  });

  if (isLoading) {
    return (
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Lottie animationData={loading} />
      </Container>
    );
  }

  const handleApprove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to accept this course?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/classreq/accept/${id}`).then((res) => {
          if (res.data?.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Success!",
              text: "Course Approved Successfully!",
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Info",
              text: "User role is not changed",
              icon: "info",
            });
          }
        });
      }
    });
  };

  const handleReject = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to reject this course?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/classreq/reject/${id}`).then((res) => {
          if (res.data?.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Success!",
              text: "Course Rejected Successfully!",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 84 },
    {
      field: "image",
      headerName: "Image",
      width: 92,
      renderCell: (params: GridRenderCellParams) => (
        <Avatar
          alt={`Image for ${params.row.name}`}
          src={params.row.image || ""}
          sx={{
            width: 48,
            height: 48,
            border: "3px solid #fff",
            boxShadow: "0 8px 18px rgba(16, 24, 40, 0.12)",
          }}
        >
          {params.row.name?.charAt(0)}
        </Avatar>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 170,
      flex: 0.8,
      renderCell: (params: GridRenderCellParams) => (
        <Typography noWrap sx={{ color: "#101828", fontWeight: 800 }}>
          {params.row.name}
        </Typography>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 230,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <Typography noWrap sx={{ color: "#475467", fontWeight: 700 }}>
          {params.row.email}
        </Typography>
      ),
    },
    {
      field: "title",
      headerName: "Title",
      minWidth: 210,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <Typography
          noWrap
          title={params.row.title}
          sx={{ color: "#344054", fontWeight: 800 }}
        >
          {params.row.title}
        </Typography>
      ),
    },
    {
      field: "description",
      headerName: "Description",
      minWidth: 260,
      flex: 1.2,
      renderCell: (params: GridRenderCellParams) => (
        <Typography
          noWrap
          title={params.row.description}
          sx={{ color: "#667085", fontWeight: 700, maxWidth: "100%" }}
        >
          {params.row.description}
        </Typography>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 140,
      renderCell: (params: GridRenderCellParams) => (
        <StatusBadge status={params.row.status} />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 220,
      renderCell: (params: GridRenderCellParams) => (
        <Stack direction="row" spacing={1}>
          {params.row.status === "approved" ? (
            <Button variant="contained" size="small" sx={successButtonSx}>
              Approved
            </Button>
          ) : params.row.status === "rejected" ? (
            <Button variant="contained" size="small" sx={dangerButtonSx}>
              Rejected
            </Button>
          ) : (
            <>
              <Button
                variant="contained"
                size="small"
                sx={approveButtonSx}
                onClick={() => handleApprove(params.row._id)}
              >
                Approve
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={rejectButtonSx}
                onClick={() => handleReject(params.row._id)}
              >
                Reject
              </Button>
            </>
          )}
        </Stack>
      ),
    },
  ];

  const rows = courses?.map((course, index) => ({
    id: index + 1,
    name: course.teacher,
    title: course.title,
    email: course.teacherMail,
    description: course.shortDesc,
    image: course.userImage,
    role: "Teacher",
    actions: "actions",
    status: course.status,
    _id: course._id,
  }));

  return (
    <DashboardLayout>
      <Head>
        <title>EduPulse || All Classes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toolbar />
      <Container maxWidth={false} disableGutters sx={adminPageSx}>
        <AdminPageHeader
          eyebrow="Class approvals"
          title="All Classes"
          subtitle="Review submitted classes with clearer teacher details, status, and long-content scanning."
          icon={<SchoolRoundedIcon />}
        />
        <AdminTableCard
          title="Class request table"
          subtitle="Existing approval and rejection actions are preserved for pending classes."
          minWidth={1180}
        >
          <DataGrid
            rows={rows || []}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            rowHeight={76}
            columnHeaderHeight={58}
            autoHeight
            sx={adminDataGridSx}
          />
        </AdminTableCard>
      </Container>
    </DashboardLayout>
  );
};

export default AllClasses;
