import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | NotesApp',
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
