import React, { useContext } from "react";
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
import useAxiosPublic from "@/hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { AuthContext } from "@/Provider/auth-provider";
import SignIn from "@/pages/auth/signin";
import dynamic from "next/dynamic";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import {
  AdminPageHeader,
  AdminTableCard,
  StatusBadge,
  adminDataGridSx,
  adminPageSx,
  approveButtonSx,
  rejectButtonSx,
} from "@/components/DashboardCompo/adminPanelStyles";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface TeacherRequestType {
  _id: string;
  image?: string;
  name: string;
  title: string;
  category: string;
  status: "pending" | "approved" | "rejected";
  experience: string;
}

const TeacherRequest: React.FC = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const {
    data: teacherRequest = [],
    refetch,
    isLoading,
  } = useQuery<TeacherRequestType[]>({
    queryKey: ["Teacher-Request"],
    queryFn: async () => {
      const res = await axiosSecure.get("/teacherRequest");
      return res.data;
    },
  });

  if (!user) {
    return <SignIn />;
  }

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

  const handleApprove = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to accept this teacher?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Approve",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosPublic.patch(`/teacherRequest/${id}`);
        const { TeacherRequest, userCollection } = res.data || {};

        if (
          TeacherRequest?.modifiedCount > 0 ||
          userCollection?.modifiedCount > 0
        ) {
          refetch();
          await Swal.fire({
            title: "Teacher Approved Successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          await Swal.fire({
            title: "User role was not changed",
            icon: "info",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        console.error(error);
        await Swal.fire({
          title: "Error",
          text: "Something went wrong",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  const handleReject = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to reject this request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Reject",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosPublic.patch(`/teacherRequest/reject/${id}`);
        if (res.data?.modifiedCount > 0) {
          refetch();
          await Swal.fire({
            title: "Teacher Rejected Successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else {
          await Swal.fire({
            title: "No changes were made",
            icon: "info",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        console.error(error);
        await Swal.fire({
          title: "Error",
          text: "Something went wrong",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  const columns: GridColDef<TeacherRequestType>[] = [
    {
      field: "image",
      headerName: "Image",
      width: 92,
      renderCell: (params: GridRenderCellParams<TeacherRequestType>) => (
        <Avatar
          src={params.row.image}
          alt={`Image of ${params.row.name}`}
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
      renderCell: (params: GridRenderCellParams<TeacherRequestType>) => (
        <Typography sx={{ color: "#101828", fontWeight: 800 }}>
          {params.row.name}
        </Typography>
      ),
    },
    {
      field: "title",
      headerName: "Title",
      minWidth: 180,
      flex: 1,
      renderCell: (params: GridRenderCellParams<TeacherRequestType>) => (
        <Typography noWrap sx={{ color: "#344054", fontWeight: 700 }}>
          {params.row.title}
        </Typography>
      ),
    },
    {
      field: "category",
      headerName: "Category",
      minWidth: 150,
      flex: 0.7,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 140,
      renderCell: (params: GridRenderCellParams<TeacherRequestType>) => (
        <StatusBadge status={params.row.status} />
      ),
    },
    { field: "experience", headerName: "Experience", minWidth: 150, flex: 0.7 },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 220,
      renderCell: (params: GridRenderCellParams<TeacherRequestType>) =>
        params.row.status === "pending" ? (
          <Stack direction="row" spacing={1}>
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
          </Stack>
        ) : null,
    },
  ];

  return (
    <DashboardLayout>
      <Head>
        <title>EduPulse || Teacher Request</title>
        <meta name="description" content="Teacher Request Management Page" />
      </Head>
      <Toolbar />
      <Container maxWidth={false} disableGutters sx={adminPageSx}>
        <AdminPageHeader
          eyebrow="Admin review"
          title="Teacher Request"
          subtitle="Review teacher applications with clearer status, profile, and action visibility."
          icon={<AssignmentTurnedInRoundedIcon />}
        />
        <AdminTableCard
          title="Teacher request queue"
          subtitle="Pending requests keep the same approve and reject actions."
          minWidth={960}
        >
          <DataGrid
            rows={teacherRequest}
            columns={columns}
            getRowId={(row) => row._id}
            initialState={{
              pagination: { paginationModel: { page: 0, pageSize: 5 } },
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

export default TeacherRequest;
