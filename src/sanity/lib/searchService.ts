import { client } from './client';
import { 
  SearchProduct, 
  SearchProject, 
  SearchResult, 
  searchProductsQuery, 
  searchProjectsQuery 
} from './searchQueries';

export async function searchContent(searchTerm: string): Promise<SearchResult> {
  try {
    // Add wildcards to improve search matching
    const formattedSearchTerm = `*${searchTerm}*`;
    
    // Run both queries in parallel
    const [projects, products] = await Promise.all([
      client.fetch<SearchProject[]>(searchProjectsQuery, { searchTerm: formattedSearchTerm }),
      client.fetch<SearchProduct[]>(searchProductsQuery, { searchTerm: formattedSearchTerm })
    ]);

    return {
      projects: projects || [],
      products: products || []
    };
  } catch (error) {
    console.error('Error searching content:', error);
    return {
      projects: [],
      products: []
    };
  }
}
