import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In | NotesApp',
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
