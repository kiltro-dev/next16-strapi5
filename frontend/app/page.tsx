import { Button } from '@/components/ui/button';
import { getStrapiData } from '@/lib/strapi';

export default async function Home() {
  const strapiData = await getStrapiData('/api/home-page');

  console.log('Strapi Data:', strapiData);
  const { title, description } = strapiData.data;
  return (
    <main className="container mx-auto py-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-600">{description}</p>
    </main>
  );
}
