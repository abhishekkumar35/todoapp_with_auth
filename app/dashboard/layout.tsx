import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | NotesApp',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
