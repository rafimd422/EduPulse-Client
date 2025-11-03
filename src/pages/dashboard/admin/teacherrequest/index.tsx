import React, { useContext } from "react";
import DashboardLayout from "@/DashboardLayout";
import { Container, Toolbar, Button } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Title from "../../../../components/Title/Title";
import Head from "next/head";
import Image from "next/image";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import loading from "../../../../assets/Loading/loading.json";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { AuthContext } from "@/Provider/auth-provider";
import SignIn from "@/pages/auth/signin";
import dynamic from "next/dynamic";

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
      width: 80,
      renderCell: (params: GridRenderCellParams<TeacherRequestType>) => (
        <Image
          src={params.row.image || "/default-avatar.png"}
          width={50}
          height={50}
          alt={`Image of ${params.row.name}`}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      ),
    },
    { field: "name", headerName: "Name", width: 150 },
    { field: "title", headerName: "Title", width: 150 },
    { field: "category", headerName: "Category", width: 150 },
    { field: "status", headerName: "Status", width: 130 },
    { field: "experience", headerName: "Experience", width: 130 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params: GridRenderCellParams<TeacherRequestType>) =>
        params.row.status === "pending" && (
          <div style={{ display: "flex", gap: "6px" }}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleApprove(params.row._id)}
            >
              Approve
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => handleReject(params.row._id)}
            >
              Reject
            </Button>
          </div>
        ),
    },
  ];

  return (
    <DashboardLayout>
      <Head>
        <title>EduPulse || Teacher Request</title>
        <meta name="description" content="Teacher Request Management Page" />
      </Head>
      <Toolbar />
      <Title title="Teacher Request" />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <DataGrid
          rows={teacherRequest}
          columns={columns}
          getRowId={(row) => row._id}
          initialState={{
            pagination: { paginationModel: { page: 0, pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10]}
          autoHeight
        />
      </Container>
    </DashboardLayout>
  );
};

export default TeacherRequest;
