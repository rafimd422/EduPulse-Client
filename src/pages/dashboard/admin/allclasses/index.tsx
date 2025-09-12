import React from "react";
import DashboardLayout from "@/DashboardLayout";
import { Container, Toolbar, Button, Avatar } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Title from "./../../../../components/Title/Title";
import Head from "next/head";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import loading from "../../../../assets/Loading/loading.json";
import swal from "sweetalert";
import dynamic from "next/dynamic";

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
    swal({
      title: "Are you sure?",
      text: "Do you want to accept This course?",
      icon: "warning",
      buttons: ["Cancel", "OK"],
      dangerMode: true,
    }).then((willApprove) => {
      if (willApprove) {
        axiosSecure.patch(`/classreq/accept/${id}`).then((res) => {
          if (res.data?.modifiedCount > 0) {
            refetch();
            swal("Course Approved Successfully!", {
              icon: "success",
            });
          } else {
            swal("User role is not changed");
          }
        });
      }
    });
  };

  const handleReject = (id: string) => {
    swal({
      title: "Are you sure?",
      text: "Do you want to reject this Course?",
      icon: "warning",
      buttons: ["Cancel", "OK"],
      dangerMode: true,
    }).then((willReject) => {
      if (willReject) {
        axiosSecure.patch(`/classreq/reject/${id}`).then((res) => {
          if (res.data?.modifiedCount > 0) {
            refetch();
            swal("Course Rejected Successfully!", {
              icon: "success",
            });
          }
        });
      }
    });
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "image",
      headerName: "Image",
      width: 60,
      renderCell: (params: GridRenderCellParams) => (
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <Avatar
            alt={`Image for ${params.row.name}`}
            src={params.row.image || ""}
            sx={{ width: 70, height: 70 }}
          />
        </div>
      ),
    },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 180 },
    { field: "title", headerName: "Title", width: 150 },
    { field: "description", headerName: "Description", width: 130 },
    { field: "status", headerName: "Status", width: 130 },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      renderCell: (params: GridRenderCellParams) => (
        <div style={{ display: "flex", gap: "4px" }}>
          {params.row.status === "approved" ? (
            <Button variant="contained" color="success" size="small">
              Approved
            </Button>
          ) : params.row.status === "rejected" ? (
            <Button variant="contained" color="error" size="small">
              Rejected
            </Button>
          ) : (
            <div>
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
                color="error"
                size="small"
                onClick={() => handleReject(params.row._id)}
              >
                Reject
              </Button>
            </div>
          )}
        </div>
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
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "40vh",
          alignItems: "center",
          mt: "1rem",
          gap: "1rem",
        }}
      >
        <Title title={"All Classes"} />
        <DataGrid
          rows={rows || []}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          style={{ width: "fit-content" }}
          autoHeight
        />
      </Container>
    </DashboardLayout>
  );
};

export default AllClasses;
