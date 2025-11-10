const BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
export async function getStrapiData(url: string) {
  try {
    const response = await fetch(`${BASE_URL}${url}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch API: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching API:', error);
    return null;
  }
}
