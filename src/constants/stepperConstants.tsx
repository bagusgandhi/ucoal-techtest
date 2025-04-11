import { CheckOutlined, FileDoneOutlined, FileExcelOutlined, FlagOutlined, SignatureOutlined, TeamOutlined } from "@ant-design/icons";

export const stepperGroup = {
  Penyusunan: [1, 2, 3],
  Pembahasan: [4, 5],
};

export const stepperData = [
  { title: "Mulai", icon: <FlagOutlined /> },
  { title: "Proses Legal", icon: <FileDoneOutlined /> },
  { title: "Data Kurang", icon: <FileExcelOutlined /> },
  { title: "Review User", icon: <TeamOutlined /> },
  { title: "Review Mitra", icon: <TeamOutlined /> },
  { title: "Penandatanganan", icon: <SignatureOutlined /> },
  { title: "Selesai", icon: <CheckOutlined /> },
];