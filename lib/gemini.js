import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function askGeminiForResources(userQuery, resources) {
  if (!resources || resources.length === 0) {
    return 'No resources available from Storyblok.';
  }

  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const prompt = `
You are an AI assistant helping users find relevant developer resources.

Here is the list of available resources:

${JSON.stringify(resources, null, 2)}

User query: "${userQuery}"

From this list, pick the 3 most relevant resources. Return them with title, description, and link in readable text.
`;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error('Gemini error:', error);
    return 'AI error: ' + error.message;
  }
}
