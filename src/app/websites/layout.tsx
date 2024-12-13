export const metadata = {
  title: {
    template: '%s | Pricing',
    default: 'Pricing',
  },
};

export default function PricingLayout( {
  children,
}: {
  children: React.ReactNode;
} ) {
  return <>{children}</>;
}
