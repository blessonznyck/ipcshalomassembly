import Airtable from 'airtable';

// Initialize Airtable
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID);

/**
 * Fetch sermons from Airtable
 * @param {number} page - Page number (1-indexed)
 * @param {number} pageSize - Number of records per page
 * @returns {Promise<{sermons: Array, hasMore: boolean, total: number}>}
 */
export async function getSermons(page = 1, pageSize = 6) {
  try {
    const tableName = process.env.AIRTABLE_TABLE_NAME_SERMONS || 'Sermons';
    
    // Fetch all records sorted by Date (newest first)
    const records = await base(tableName)
      .select({
        sort: [{ field: 'Date', direction: 'desc' }],
        view: 'Grid view' // Use your Airtable view name
      })
      .all();

    // Calculate pagination
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedRecords = records.slice(startIndex, endIndex);

    // Transform Airtable records to sermon objects
    const sermons = paginatedRecords.map(record => ({
      id: record.id,
      title: record.fields.Title || 'Untitled Sermon',
      description: record.fields.Description || record.fields.Descrption || '',
      youtubeLink: record.fields.youtubelink || record.fields.YoutubeLink || '',
      date: record.fields.Date || '',
      author: record.fields.Author || 'IPC Shalom Assembly',
      // Extract YouTube video ID from the link
      videoId: extractYouTubeId(record.fields.youtubelink || record.fields.YoutubeLink || '')
    }));

    return {
      sermons,
      hasMore: endIndex < records.length,
      total: records.length,
      currentPage: page,
      totalPages: Math.ceil(records.length / pageSize)
    };
  } catch (error) {
    console.error('Error fetching sermons from Airtable:', error);
    throw new Error('Failed to fetch sermons');
  }
}

/**
 * Extract YouTube video ID from various YouTube URL formats
 * @param {string} url - YouTube URL
 * @returns {string} - Video ID or empty string
 */
function extractYouTubeId(url) {
  if (!url) return '';
  
  // Handle different YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s]+)/,
    /^([a-zA-Z0-9_-]{11})$/ // Direct video ID
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return '';
}
