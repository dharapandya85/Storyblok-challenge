import StoryblokClient from 'storyblok-js-client';

const storyblokApi = new StoryblokClient({
  accessToken: process.env.STORYBLOK_TOKEN,
});

export async function getResources() {
    try{
  const res = await storyblokApi.get('cdn/stories', {
    version: 'published',
    starts_with: 'resources/', // assuming all your resources are under a folder named 'resources'
  });

  return res.data.stories.map((story) => ({
    title: story.content.title,
    description: story.content.description,
    tags: story.content.tags,
    type: story.content.type,
    link: story.full_slug,
  }));
}catch(error){
    console.error("Error fetching Storyblok resources:",error);
    return [];
}
}
